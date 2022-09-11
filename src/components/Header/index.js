import React, { useState, useEffect } from 'react';

import { Container } from './Header.styles';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { TabUnstyled, TabsUnstyled } from "@material-ui/core";
import Home from '../home';
import Footer from '../Footer';

const Header = () => {

    let { page } = useParams();

    const tabs = [
        { label: "HOME", link: "/test_portfoltio_website" },
        { label: "ABOUT", link: "/About" },
        { label: "ANIMATIONS", link: "/Animations" },
        { label: "PAGES", link: "/Pages" },
        { label: "BLOG", link: "/Blog" },
        { label: "CONTACT", link: "/Contact" }
      ];

    const [HOME, ABOUT, ANIMATIONS, PAGES, BLOG, CONTACT] = tabs;
    const initialTabs = [HOME, ABOUT, ANIMATIONS, PAGES, BLOG, CONTACT];

    const [help, sethelp] = useState(initialTabs[0]);

    
    return(
        <>
    <Container>
        <h1>MEETME</h1>
        {/*<ul>
            <li><Link to='/'>HOME </Link></li>
            <li><Link to='/ABOUT'> ABOUT</Link></li>
            <li><Link to='/SERVICES'> SERVICES</Link></li>
            <li><Link to='/PAGES'> PAGES</Link></li>
            <li><Link to='/BLOG'> BLOG</Link></li>
            <li><Link to='/CONTACT'>CONTACT </Link></li>
    </ul>*/}
    <ul>
        {initialTabs.map((item) => (
          <li key={item.label} onClick={() => sethelp(item)}>
            <Link to={item.link}>
                {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {console.log(help)}
    </Container>
    </>
    )
}

export default Header;