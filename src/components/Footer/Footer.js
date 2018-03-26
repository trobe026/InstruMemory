import React from 'react';
import './Footer.css';


const Footer = (props) => (
<div>
  <footer className='footer'>
    &copy;Travis Roberts
    <img src={props.logo} className='App-logo' alt='logo'/>
  </footer>
</div>

);

export default Footer;
