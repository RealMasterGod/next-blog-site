import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

//FETCH DATA WITH AN API
const getData = async (slug) => {

  const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
  if(!res.ok) {
      throw new Error("Something went wrong")
  }

  return res.json()

}

export const generateMetadata = async ({params}) => {
  const {slug} = params
  const post = await getPost(slug)
  return {
    title: post.title,
    description: post.desc
  }
}

const SinglePost = async ({params}) => {
  const {slug} = params
  const post = await getData(slug)

  //FETCH DATA WITHOUT AN API
  // const post = await getPost(slug)
  // console.log("post",post)
  // console.log("slug",slug)
  // console.log("puid",post.userId)
  return (
    <div className={styles.container}>
      {post.img && <div className={styles.imgContainer}>
        <Image
          alt="postImg"
          className={styles.img}
          fill
          src={
            post.img
          }
        />
      </div>}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId = {post.userId}/>
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{new Date(post.createdAt).toLocaleDateString('en-US',{month: 'short', year: "numeric", day: "numeric"})}</span>
          </div>
        </div>
        <div className={styles.content}>
            {post.desc}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
