import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar () {
    return (
        <Fragment>
            <header className="navbar">
                <Link to = '/'><img className="logo" src="/assets/Logo.png" alt="The News Provider" /></Link>
                <div className="menu_container">
                    <ul>
                        <li><NavLink activeClassName="active" className="menu_items" to = '/all-news'>All News</NavLink></li>
                        <li><NavLink className="menu_items" to = '/top-news'>Top News</NavLink></li>
                    </ul>
                </div>
            </header>
            <div className="clear_nav"></div>
        </Fragment>
    )
}