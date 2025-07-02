export const metadata = {
  title:{
    template: '%s | Technical Agency',
    default:'Technical Agency'
  }
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{background: "cyan"}}>Main Header</div>
        {children}
        <div style={{background: "aqua"}}>Main Footer</div>
      </body>
        
    </html>
  );
}