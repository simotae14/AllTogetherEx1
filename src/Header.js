import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
    <header className="App-header">
        <img src={props.logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
    </header>
);

Header.propTypes = {
    logo: PropTypes.string.isRequired,
}

export default Header;