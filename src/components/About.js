import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
      }
    }
    file(relativePath: { eq: "JesperZ.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    about: { nodes },
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  const { info, title, stack } = nodes[0]
  return (
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={fluid} className="about-img" />
        <article className="about-text">
          <Title title={title} />
          <p>{info}</p>
          <div className="about-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
          <Link style={{ marginTop: "50px" }} to="/about" className="btn">
            Learn More
          </Link>
        </article>
      </div>
    </section>
  )
}

export default About
