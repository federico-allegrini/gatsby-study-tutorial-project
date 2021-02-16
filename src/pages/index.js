import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      Hello people!
      <Link to="/blog/">Blog page</Link>
      <a href="https://www.gatsbyjs.com/">Gatsby docs</a>
    </div>
  )
}
