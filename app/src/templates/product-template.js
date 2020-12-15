import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

export const query = graphql`
  query GetProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      description {
        description
      }
      price
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const productTemplate = ({
  data: {
    product: { title, image, description, price },
  },
}) => {
  return (
    <>
      <Link to="/products">&lt;- back</Link>
      <div className="product">
        <article><Image fluid={image.fluid} alt={title} /></article>
        <article className="product__title">
          <h2>{title}</h2>
          <span>$ {price}</span>
        </article>
        <p>{description.description}</p>
      </div>
    </>
  )
}

export default productTemplate
