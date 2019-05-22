import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


export default () => (
  <div>
  <Layout>
    <SEO title="About" />
    
    <h3>Hi, I'm Hellen Ferrari.</h3>
    <p>I am a software developer based out of Vancouver, Canada.</p>

    <p>Some might call me a full stack developer in that I work in everything from HTML/CSS, Javascript (React/Angular), C# and SQL.</p> 
    <p>My true love is building new applications and application features that result in an awesome user interaction.</p>
  </Layout>
  </div>
)

// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const AboutPage = () => (
//   <Layout>
//     <SEO title="About" />
//     <h1>Hi from the about page</h1>
//     <p>Full-Stack Developer</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default AboutPage
