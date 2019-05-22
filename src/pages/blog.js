import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Hi from the blog page</h1>
    <p>Article 01</p>
    <p>Article 02</p>
    <p>Article 03</p>
    <p>Article 04</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
