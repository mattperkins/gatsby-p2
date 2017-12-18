import React from 'react'
import Link from 'gatsby-link'

const container = {
  padding:50
}

export default ({data}) => (<div>
  
  <div style={container}>
  <Link to="/subPages/page2">Go Page2</Link>

    <h4>{data.site.siteMetadata.title}</h4>
    <h5>{data.site.siteMetadata.author}</h5>
    <h6>{data.site.siteMetadata.language}</h6>
    <h2>What is Lorem Ipsum?</h2>
    <p>
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  </p>
  
  </div>

</div>)



export const query = graphql`
 query lemon {
   site {
     siteMetadata {
       title
       author
       language
     }
   }
 }
`