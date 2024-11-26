import { addPost, deletePost } from '@/lib/action'
import React from 'react'

const ServerActionTest = () => {
    return (
        <div>
            <form action={addPost}>
                <input type="text" placeholder='Title' name='title' />
                <input type="text" placeholder='Description' name='desc' />
                <input type="text" placeholder='Slug' name='slug' />
                <input type="text" placeholder='userId' name="userId"/>
                <button>Create</button>
            </form>
            <form action={deletePost}>
                <input type="text" placeholder='postId' name="id" />
                <button>Delete</button>
            </form>
        </div>
    )
}

export default ServerActionTest
