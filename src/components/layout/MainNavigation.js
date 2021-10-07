import React from 'react'
import { Link } from 'react-router-dom'

import classes from '../styles/MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div  className={classes.logo}>Logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Main</Link>
                    </li>
                    <li>
                        <Link to='/tehnology'>Tehnology</Link>
                    </li>
                    <li>
                        <Link to='/sports'>Sports</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
