import React from "react";
import { FaAngleDown } from "react-icons/fa";
import ApplePay from "../assest/apple-pay.png";
import Opay from "../assest/opay.png";
import Amex from "../assest/Amex.png";
import Paypal from "../assest/paypal.png";
import MasterCard from "../assest/mastercard.png";
import Gpay from "../assest/gpay.png";
import USA from "../assest/usa.png"
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="subfooter">
        <div className="footer-title">Be the first to know</div>
        <div className="footer-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. this is simply dummy text.
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter your e-mail..."
            className="searchbar"
          />
          <button type="button" className="subscribe-button">
            SUBSCRIBE
          </button>
        </div>
        <div className="hr"></div>
        <div className="callus-contact">
          <div className="callus">CALL US</div>
          <div className="contact">
            <p className="phone-num">+44 221 133 5360</p>
            <div className="box"></div>
            <p className="email">customercare@mettamuse.com</p>
          </div>
        </div>
        <div className="hr"></div>
        <div className="currency">CURRENCY</div>
        <div className="country-name">
            <div className="flag">
                <img className="flag-image" src="https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg" alt='usa-flag'/>
                
            </div>
            <div className="box"></div>
                <div className="usd">USD</div>
        </div>
        <div className="hr"></div>
        <div className="footer-section">
        <button className="footer-toggle">mettā muse</button>
        <FaAngleDown className="footer-icon" />
      </div>
      <div className="hr"></div>
      <div className="footer-section">
        <button className="footer-toggle">QUICK LINKS</button>
        <FaAngleDown className="footer-icon" />
      </div>
      <div className="hr"></div>
      <div className="footer-section">
        <button className="footer-toggle">FOLLOW US</button>
        <FaAngleDown className="footer-icon" />
      </div>
      <div className="hr"></div>
      <div className="footer-section payment-methods">
        <h4>mettā muse ACCEPTS</h4>
        <div className="payment-icons">
          <img src={Gpay} alt="gpay" className="payment"/>
          <img src={MasterCard} alt="mastercard" className="payment"/>
          <img src={Paypal} alt="paypal" className="payment"/>
          <img src={Amex} alt="amex" className="payment"/>

          <img src={ApplePay} alt="applepay" className="payment"/>
          <img src={Opay} alt="Shop pay"  className="payment"/>
        
        </div>
      </div>

      <div className="footer-copyright">
        <p className="copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
      </div> */}
      <div className="subfooter-tabdesk">
        <div className="email-contact">
          <div className="email">
            <div className="footer-title">Be the first to know</div>
            <div className="footer-description">
            Sign up for updates from mettā muse.
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className="searchbar"
              />
              <button type="button" className="subscribe-button">
                SUBSCRIBE
              </button>
            </div>
          </div>
          <div className="contact-container">
            <div className="contact">
              <p className="us-footer">CONTACT US</p>
              <p className="phone-num">+44 221 133 5360</p>
              <p className="email">customercare@mettamuse.com</p>
            </div>
            <div className="currency-usd">
             <p className="currency"> CURRENCY</p>
              <div className="usd-img">
                <div className="flag">
                <img className="usa-flag" src={USA} alt="USA" />

                </div>
                <div className="box"></div>
                <p className="usd">USD</p>
              </div>
              <p className="des">Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="liks-follows">
        <div className="mettā-muse">
          <p className="mettā">mettā muse</p>
          <ul>
            <li>About us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="quick">
          <p className="Quick-Links">Quick Links</p>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="follow-payment">
          <div className="follow">
            <p className="follow-social">
              FOLLOW US
            </p>
            <div className="social">
                <div className="instagram"><FaInstagram className="instagram-icon"/></div>
                <div className="linkedin"><FaLinkedin className="linkedin-icon"/></div>
            </div>
          </div>
          <div className="payment">
            <p className="payment-accept">
            mettā muse <span className="accept">Accepts</span>
            </p>
            <div className="payment-icons">
          <img src={Gpay} alt="gpay" className="payment"/>
          <img src={MasterCard} alt="mastercard" className="payment"/>
          <img src={Paypal} alt="paypal" className="payment"/>
          <img src={Amex} alt="amex" className="payment"/>

          <img src={ApplePay} alt="applepay" className="payment"/>
          <img src={Opay} alt="Shop pay"  className="payment"/>
        
        </div>
          </div>
        </div>
        </div>
      </div>
      <p className="footer-copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
