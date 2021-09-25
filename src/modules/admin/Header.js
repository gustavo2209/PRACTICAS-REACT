import React from 'react'

const Header = () => {

    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <img src={process.env.PUBLIC_URL + '/logo192.png'}/> Admin
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id='navbarBasicExample' className='navbar-menu'>
                <div className='navbar-end'>
                <div className='navbar-item'>
                    <a href='/' className='button is-info'>
                    Cerrar Sesión
                    </a>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;