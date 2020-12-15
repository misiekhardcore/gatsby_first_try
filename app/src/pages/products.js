import { graphql } from "gatsby"
import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "./products.scss"

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        slug
        title
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

const Products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <div className="products">
      {products.map(({ id, title, slug, price, image }) => (
        <div key={id} className="products__item">
          <Link to={`${slug}`}>
            <Image fluid={image.fluid} alt={title} />
          </Link>
          <div className="products__item-info">
            <h4>{title}</h4>
            <span>$ {price}</span>
          </div>
          <Link to={`${slug}`}>more details</Link>
        </div>
      ))}
    </div>
  )
}

export default Products
