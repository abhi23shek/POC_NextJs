import React from 'react'

async function comment({params}) {
    const {commentID, blogID} = await params;

  return (
    <div>comment no - {commentID} on {blogID} page</div>
  )
}

export default comment