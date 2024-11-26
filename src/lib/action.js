"use server"
import { revalidatePath } from "next/cache"
import { Post, User } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth"
import bcrypt from "bcrypt"

export const addPost = async (previousState,formData) => {
    const {title,desc,slug,userId} = Object.fromEntries(formData)
    // console.log(title,desc,slug)
    try {
        await connectToDb()
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })
        await newPost.save()
        console.log("Saved to db.")
        revalidatePath('/blog')
        revalidatePath('/admin')
    } catch (err) {
        console.log(err)
        throw new Error("something went wrong.")
    }
}

export const deletePost = async (formData) => {

    const {id} = Object.fromEntries(formData)
    // console.log(title,desc,slug)
    try {
        await connectToDb()
        await Post.findByIdAndDelete(id)
        console.log("deleted form db.")
        revalidatePath('/blog')
        revalidatePath('/admin')
    } catch (err) {
        console.log(err)
        throw new Error("something went wrong.")
    }
}

export const addUser = async (previousState,formData) => {
    const {username,email,password,isAdmin,img} = Object.fromEntries(formData)
    // console.log(title,desc,slug)
    try {
        await connectToDb()
        const user = await User.findOne({username})
        if(user) {
            return {error:"Username already exists!"}
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password,salt)
        const newUser = new User({
            username,
            email,
            password:hashedPass,
            isAdmin,
            img
          })
          await newUser.save()
        console.log("Saved to db.")
        revalidatePath('/admin')
    } catch (err) {
        console.log(err)
        throw new Error("something went wrong.")
    }
}


export const deleteUser = async (formData) => {

    const {id} = Object.fromEntries(formData)
    // console.log(title,desc,slug)
    try {
        await connectToDb()
        await Post.deleteMany({userId: id})
        await User.findByIdAndDelete(id)
        console.log("deleted form db.")
        revalidatePath('/admin')
    } catch (err) {
        console.log(err)
        throw new Error("something went wrong.")
    }
}

export const handleGithubLogin = async () => {
    "use server"
    await signIn("github")
}

export const handleLogout = async () => {
    "use server"
    await signOut()
}

export const register = async (previousState,formData) => {
    const {username,email,password,passwordRepeat,img} = Object.fromEntries(formData)
    if(password !== passwordRepeat) {
        return {error:"Passwords do not match!"}
    }
    try {
        await connectToDb()
        const user = await User.findOne({username})
        if(user) {
            return {error:"Username already exists!"}
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password,salt)
        const newUser = new User({
            username,
            email,
            password:hashedPass,
            img
          })
          await newUser.save()
          console.log("saved to db")
          return {success:true}
    } catch (err) {
        console.log(err)
        return {error: "Something went wrong"}
    }
}

export const login = async (previousState,formData) => {
    const {username,password} = Object.fromEntries(formData)
    try {
        await signIn("credentials", {username,password})
    } catch (err) {
        console.log(err.message)
        if(err.message.includes("CredentialsSignin")) {
            return {error: "Wrong Credentials"}
        }
        throw err
    }
}