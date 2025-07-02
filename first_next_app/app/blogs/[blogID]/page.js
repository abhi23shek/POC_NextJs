import React from 'react'


//Static Site Regeneration
// export async function generateStaticParams(){   
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//   const data = await response.json()
//   return data.map(({ id }) => ({ blogID: `${id}` }));
// }

//Incremental Static Regeneration 
// export const revalidate = 5; //regenrate the page after every 5 seconds

async function blog({params}) {
    console.log(await params)
    const {blogID} = await params;
  return (
    <>
    <p>Blog {blogID}</p>
    </>
  )
}

export default blog