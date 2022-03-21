import './Header.css';
import {RadixIconsKeyboard} from '../../Assets/icons';
import {PhShoppingCartSimpleBold} from '../../Assets/icons';
import {PhHeartBold} from '../../Assets/icons';
import pingu from '../../Assets/Images/pingu.jpg'
import React from 'react';
const Header = props => {
    return(<div>
         <div className="home-page-container">
        <div className="image-container"></div>

        <div className="nav-bar">
            <a className="homepage-nav-links" href="#">
                <div className="homepage-nav-logo">
                    <div>FlameKeys</div>
                    <RadixIconsKeyboard color='white'/> 
                </div>
            </a>
            <div className="nav-bar-right-side">
                <div className="input-field-icon">
                    <label>
                        {/* <!-- icon container --> */}
                        <span className="icon small"><i className="bi bi-search"></i></span>
                        <input className="input-field" placeholder="Search" type="text" />
                    </label>
                </div>
                <a className="homepage-nav-links" href="./productpage.html">
                    <div>OUR PRODUCTS</div>
                </a>
                
                <a className="homepage-nav-links" href="#">
                <PhShoppingCartSimpleBold transform='scale(1.1)' color='white'/>
                </a>
                
                <a className="homepage-nav-links" href='#'>
                <PhHeartBold color='white'/>
                </a>

                <a className="homepage-nav-links" href="./login.html" target="_blank">
                    <div>LOGIN</div>
                </a>

                {/* <!-- Avatar --> */}
                <a href="#">
                    <div className="avatar avatar-sm">
                        <img src={pingu} alt="penguin-w-headphones"/>
                    </div>
                </a>
            </div>
        </div>

        <div className="caption-content1">
            <h1 className="homepage-img-title">DUCKY RGB TKL-WHITE KEYBOARD</h1>
            <h2>MORE PRODUCTS</h2>
            <a className="caption-link" href="./single-product.html">ORDER NOW</a>
        </div>
        <div className="caption-content2">
            <h1>DUCKY FEATHER BLACK AND WHITE MOUSE</h1>
            <h2>MORE PRODUCTS</h2>
            <a className="caption-link" href="./single-product.html">ORDER NOW</a>
        </div>
        <div className="footer">
            <h1>Made with <span className="heart-icon">❤</span> by Jyotsna Mehta.</h1>
            <h1>Follow Me.</h1>
            <div className="social-media-handles">
                <a className="footer-links" href="https://twitter.com/JyotsnaMehta24" target="_blank"><i
                        className="bi bi-twitter"></i></a>
                <a className="footer-links" href="https://www.linkedin.com/in/jyotsna-mehta-795846215/" target="_blank"><i
                        className="bi bi-linkedin"></i></a>
                <a className="footer-links" href="https://github.com/j24m" target="_blank"><i className="bi bi-github"></i></a>
            </div>
        </div>

    </div>
    </div>
    )
} 

export default Header;