import React, { Component } from "react"
import Layout from "../components/layout"

import styles from "../components/products.module.css"

class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>Products page</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem modi optio nobis sit autem obcaecati illum in iusto
            id expedita! Neque quia officia odit assumenda aliquam voluptatem
            cumque impedit est.
          </p>
        </div>
      </Layout>
    )
  }
}

export default products
