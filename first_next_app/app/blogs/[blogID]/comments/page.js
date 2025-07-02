import Link from 'next/link'
import React from 'react'

async function comments({params}) {
  const {blogID} = await params
  return (
    <>
    <p>Comments on {blogID} page</p>
    
    </>
  )
}

export default comments