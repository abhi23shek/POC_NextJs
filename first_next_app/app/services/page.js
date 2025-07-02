import Link from "next/link"

//Dynamically rendering a Static site
// export const dynamic = 'force-dynamic'


// export const metadata = {
//   title:'services'

// }

function Services() {
  return (
    <><h1>Services:</h1>
    <p>
    <Link href={"./services/web-dev"}>Web Development</Link> 

    </p>
    <p>
    <Link href={"./services/app-dev"}> App Development</Link> 
    </p>
    <p>
    <Link href={"./services/ui-ux-design"}> UI/UX Design</Link> 
    </p>
    <p>
    <Link href={"./services/seo"}> SEO</Link>
    </p>
    </>

  )
}

export default Services