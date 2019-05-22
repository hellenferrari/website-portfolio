import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default () => (
  <div>
  <Layout>
      <SEO title="Contact" />
        <form>
            <p>Name:</p>
            <p>E-mail:</p>
            <p>Subject:</p>
        </form>
      <h3>I'd love to talk! Email me at the address below</h3>
      <p>
        <a href="mailto:me@example.com">hello@hellenferrari.com</a>
      </p>
  </Layout>
  </div>
)

// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const ContactPage = () => (
//   <Layout>
//     <SEO title="Resume" />
//     <h1>Hi from the contact page</h1>
//     <form>
//     <p>Name:</p>
//     <p>E-mail:</p>
//     <p>Subject:</p>
//     </form>
    
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

// export default ContactPage
