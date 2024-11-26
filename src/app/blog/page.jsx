import PostCard from "@/components/postCard/PostCard"
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data"


//FETCH DATA WITH AN API
const getData = async () => {

    const res = await fetch("http://localhost:3000/api/blog", {next: {revalidate: 3600}})
    if(!res.ok) {
        throw new Error("Something went wrong")
    }

    return res.json()

}

const Blog = async () => {
    const posts = await getData()

    //FETCH DATA WITHOUT AN API
    // const posts = await getPosts()
    return (
        <div className={styles.container}>
            {posts.map(post => (
                <div className={styles.post} key={post._id}>
                    <PostCard post={post}/>
                </div>
            ))}
            {/* <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div>
            <div className={styles.post}>
                <PostCard />
            </div> */}
            
        </div>
    )
}

export default Blog
