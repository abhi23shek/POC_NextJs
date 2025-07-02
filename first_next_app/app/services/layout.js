import React from 'react'

export const metadata = {
  title:'services'

}

export default function serviceLayout({children}) {
  return (
  <>
  <div style={{background: "yellow"}}>Service Header</div>
  <section>{children}</section>
  <div style={{background: "coral"}}>Service Footer</div>
  </>
    
    
  )
}
