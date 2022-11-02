import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import * as classes from '../styles/index.module.css'

const IndexPage = () => (
  <Layout>
    <div className={classes.IndexPage}>
      <div className={classes.Intro}>
        <h1>Eat, Sleep</h1>
        <h2>Code & Repeat</h2>
        <p>Software Developer</p>
        <StaticImage alt="developer's white cat" src="../images/yuki.jpg" width={1100} />
      </div>
    </div>
  </Layout>
)


// export const Head = () => <Seo title="Home" />

export default IndexPage
