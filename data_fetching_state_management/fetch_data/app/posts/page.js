'use client'
import React, { useEffect, useState } from 'react'

export default function post() {
  

    const [posts, setPosts] = useState([])

    

    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            const data = await response.json();
            // const data = await JSON.parse(response);
            setPosts(data)

        }
        fetchPosts()
    },[])

  return (
    <>
    <h1>Posts</h1>
    <div className="posts-container">
      {
        posts.map(({id, title, body})=>(
          <div className="post-card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}
