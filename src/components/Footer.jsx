import React from 'react';
import Fade from 'react-reveal/Fade';


const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">You cannot answer twice the same question.</div>
                <div className="footer_copyright">
                    Made with  
                <span style={{color : 'crimson'}}>♥</span> By 
                <a href="https://www.linkedin.com/in/akash-dixit-283220211/" target="_blank" rel="noopener noreferrer">Akash Dixit
                </a>
                
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;