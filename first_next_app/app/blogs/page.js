import Likes from '@/components/Likes'
import Link from 'next/link'
import React from 'react'

function blogs() {
  return (
    <>
    <h1>All Blogs:</h1>
    <p>Blog 1</p>
    <p>Blog 2</p>
    <p>Blog 3</p>
    <p>Blog 4</p>

    <div><Likes /></div>
    </>
  )
}

export default blogs