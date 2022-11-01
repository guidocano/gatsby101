import React from 'react';
import Navbar from './navbar';
import '../styles/global.css'
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({children}) => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const {title} = data.site.siteMetadata;

    return (
        <div className="Layout">
           <Navbar title={title}/>
            {children}
            <footer>
                <p>{title} - Footer 2022</p>
            </footer>
        </div>
    );
}

export default Layout;
