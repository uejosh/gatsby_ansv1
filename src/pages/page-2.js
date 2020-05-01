import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="PAGE TWO" />
    <p>Hopefully with time, this page will house the squad member's directory uploaded by each member, and possibly an integrated comment section with each member having the verified badge.</p>
    <p>It will be legit cool. Watch out!!!</p>
    <p>Suggestions on the features you'd like to have included is welcomed on the whatsapp group.</p>
    <p>Have y'all a splendid holliday and weekend.</p>
    <p>P.S. Stay safe; Coro is still out there in the air.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
