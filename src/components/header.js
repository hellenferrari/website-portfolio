import { Link } from "gatsby";
import PropTypes from "prop-types"
import React from "react";

import logo from "../images/logo.png";
import headerStyles from './header.module.scss';

const Header = () => {
    return (
      <div className={headerStyles.header}>
        <h2 className={headerStyles.title}>
          Hellen
        </h2>     
        <ul className={headerStyles.navList}>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about/">About</Link>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/portfolio/">Portfolio</Link>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/resume/">Resume</Link>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/reading-list/">Reading List</Link>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact/">Contact</Link>
        </ul>
      </div>
    )
};

export default Header;

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link> |
//         <Link to="/portfolio/">Portfolio</Link> |
//         <Link to="/about/">About</Link> |
//         <Link to="/resume/">Resume</Link> |
//         <Link to="/blog/">Blog</Link> |
//         <Link to="/contact/">Contact</Link>
//       </h1>      
        
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

//xport default Header
