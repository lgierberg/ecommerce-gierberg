import React from 'react'

const NavItem = ({menuItem}) => {
    return (
        <li className="nav-item active">
            <a className="nav-link" href="#">{menuItem}</a>
         </li>
    )
}

export default NavItem
