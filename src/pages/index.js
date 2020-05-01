import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="HOME" />
    <h1>Hello Good people of AML-NMC</h1>
    <h2>Welcome to your new online hub.</h2>
    <p>This is still in it's early stage of development, but more features will be added soon.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">More</Link>
  </Layout>
)

export default IndexPage
