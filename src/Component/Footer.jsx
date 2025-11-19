// function Footer(){
//     return(
    
//         <>
//         <h1>hello Footerpage</h1>


//         </>
//     )
// }
// export default Footer;
import React from 'react';
// import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Your Footer</h3>
        <div className="footer-socials">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourWebsite.com | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
