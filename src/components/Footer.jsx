import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Floating Settings Box */}
            <div className="settings-box">
                <button>Data Settings</button>
                <button>Cookie Settings</button>
                <button>Privacy Policy</button>
                <button>Terms of Use</button>
                <button>Help Center</button>
            </div>

            <div className="footer-top-line"></div>

            <div className="footer-container">
                {/* Column 1 */}
                <div className="footer-col">
                    <h3>Products</h3>
                    <a href="#">Coffee Beans</a>
                    <a href="#">Milkshakes</a>
                </div>

                {/* Column 2 */}
                <div className="footer-col">
                    <h3>Categories</h3>
                    <a href="#">Hot Coffees</a>
                    <a href="#">Cold Coffees</a>
                    <a href="#">Milkshakes</a>
                    <a href="#">Desserts</a>
                </div>

                {/* Column 3 */}
                <div className="footer-col">
                    <h3>Company Info</h3>
                    <a href="#">About Us</a>
                    <a href="#">Our Story</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Press</a>
                    <a href="#">Sustainability</a>
                    <a href="#">Contact</a>
                </div>

                {/* Column 4 */}
                <div className="footer-col">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>


                </div>
            </div>

            
        </footer>
    );
};

export default Footer;
