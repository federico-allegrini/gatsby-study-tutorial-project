import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      Hello people!
      <Link to="/blog/">Blog page</Link>
      <a href="https://www.gatsbyjs.com/">Gatsby docs</a>
    </div>
  )
}
