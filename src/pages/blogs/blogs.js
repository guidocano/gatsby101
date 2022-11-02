import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import * as classes from '../../styles/blogs.module.css';

const BlogsPage = ({data}) => {

    return (
        <Layout>
            <div className={classes.BlogsPage}>
                <h1>Bloggy Blogs.</h1>
                <div className={classes.BlogPosts}>
                    {data.allMarkdownRemark.nodes.map (node => {
                        return (
                            <div className={classes.BlogPost} key={node.id}>
                                <h3>{node.frontmatter.title}</h3>
                                <p>{node.frontmatter.description}</p>
                                <p>{node.frontmatter.date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
          description
        }
        id
      }
    }
  }
`

export default BlogsPage;
