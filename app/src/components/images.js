import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-4.jpg"
import Image from "gatsby-image"
import "./images.css"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)

  return (
    <section>
      <article>
        <img src={img} alt="aa" width="100%" />
      </article>
      <article>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
