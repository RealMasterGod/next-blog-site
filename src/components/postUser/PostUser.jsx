import { getUser } from "@/lib/data"
import styles from "./postUser.module.css"
import Image from "next/image"


//FETCH DATA WITH AN API
// const getData = async (userId) => {

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"})
//     if(!res.ok) {
//         throw new Error("Something went wrong")
//     }
  
//     return res.json()
  
//   }

const PostUser = async ({userId}) => {
    // const user = await getData(userId)

    //FETCH DATA WITHOUT AN API
    // console.log('userId',userId)
    const user = await getUser(userId)
    // console.log(user)
    return (
        <div className={styles.container}>
            <Image
            alt="postImg"
            className={styles.avatar}
            width={50}
            height={50}
            src={
              user.img || "/noavatar.png"
            }
          />
            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user?.username}</span>
            </div>
          </div>
    )
}

export default PostUser
