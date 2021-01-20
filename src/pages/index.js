import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="this is my home page" />
      <Hero />
      <About />
      <Projects projects={projects} title="Latest Projects" showLink />
      <Jobs />
      <Services />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

// export const query = graphql`
//   {
//     allStrapiProjects(filter: { featured: { eq: true } }) {
//       nodes {
//         description
//         github
//         id
//         title
//         url
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         stack {
//           id
//           title
//         }
//       }
//     }
//   }
// `
