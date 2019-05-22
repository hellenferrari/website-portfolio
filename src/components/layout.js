import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import '../styles/index.scss';
// import { Link } from "gatsby";
// import logo from "../images/logo.png";

import layoutStyles from './layout.module.scss';

const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>      
      <Footer />
    </div>
  )
  
}

export default Layout;

// <li style={{ display: `inline-block`, marginRight: `0.2rem`, color: `#4751de`}}>
  //   <Link to={props.to}>{props.children}</Link>
  // </li>

// export default ({ children }) => (
//   <div style={{ margin: `2rem auto`, maxWidth: 650, padding: `0 0.2rem` }}>
//     <header style={{ marginBottom: `1.5rem` }}>
//       <Link to="/about" style={{ textShadow: `none`, backgroundImage: `none` }}>
//         <h3 style={{ display: `inline` }}>
//         <img src={logo} alt="" />        
//         </h3>

//       </Link>
//       <ul style={{ listStyle: `none`, float: `right`, color: `#4751de`}}>
//         <ListLink to="/about/">About</ListLink>
//         <ListLink to="/portfolio/">Portfolio</ListLink>
//         <ListLink to="/resume/">Resume</ListLink>
//         <ListLink to="/reading-list/">Reading List</ListLink>
//         <ListLink to="/contact/">Contact</ListLink>
//       </ul>
//     </header>
//     {children}
//   </div>
//)


// /**
//  * Layout component that queries for data
//  * with Gatsby's StaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/static-query/
//  */

// import React from "react"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           <main>{children}</main>
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
