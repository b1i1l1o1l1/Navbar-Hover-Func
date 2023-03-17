import React, { useState } from 'react'
import "./Navbar.css"
import Navbar_item from "../Navbar_item/Navbar_item"
import { nav_data } from "../../static_data"
function Navbar() {

    return (
        <div className='navbar'>
            <div className="navbar_logo">
                <h1>LOGO</h1>
            </div>
            <ul className="navbar_collection">
                {
                    nav_data.map(nav => (
                        <Navbar_item title={nav.title} items={nav.items} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar