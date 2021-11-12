import React from 'react'
import NavCart from '../CartWidget/CartWidget'
import NavItem from '../NavItem/NavItem'

const NavBar = ({titulo}) => {

    return (
        <>
        <div className="container-fluid">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">{titulo}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <NavItem menuItem="Home (current)"/>
                            <NavItem menuItem="Cursos"/>
                            <NavItem menuItem="Test del Inversor"/>
                            <NavItem menuItem="Contacto"/>
                            <li> <NavCart /></li>
                        </ul>
                    </div>
                </nav>
        </div>
            
      </div>
      </>
    )
}

export default NavBar
