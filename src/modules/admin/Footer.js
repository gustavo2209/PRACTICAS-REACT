import React from 'react'

const Footer = () => {
    const date = new Date();

    const footer = {
      background: '#F5F5F5',
      padding: '1.5em'
    };

    return (
      <footer className="footer" style={footer}>
        <div className="content has-text-centered">
            <p className="has-text-centered">
                <strong>Admin</strong> desarrollado en React JS &copy; { date.getFullYear() }
            </p>
        </div>
    </footer>
    );
}

export default Footer;