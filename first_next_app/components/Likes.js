'use client'
import React, { useState } from 'react'

export default function Likes() {
    const[likes, setLikes] = useState(0);

  return (
    <div>
        <button onClick={() =>{setLikes((prev)=>prev+1)}}>Like</button>
        <p>Likes: {likes}</p>
    </div>
  )
}
