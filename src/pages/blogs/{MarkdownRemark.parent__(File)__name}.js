import React from 'react';
import Layout from '../../components/layout';
import * as classes from '../../styles/blog.module.css'

const BlogPostPage = () => {
    return (
        <Layout>
            <div>
                <h1 className={classes.Blog}>BlogPostPage</h1>
            </div>
        </Layout>

    );
}

export default BlogPostPage;
