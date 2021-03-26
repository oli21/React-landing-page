import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-title">
          <h2>
            Join the Adventure newsletter to receive our best vacation deals
          </h2>
          <p>You can unsubscribe at any time</p>
        </div>
        <div className="footer-input">
          <form action="">
            <input type="text" placeholder="Your Email" />
            <button className="btn">Subscribe</button>
          </form>
        </div>

        <div className="footer-content">
          <ul>
            <p>About Us</p>
            <li>How it works</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>terms of Service</li>
          </ul>

          <ul>
            <p>Contact Us</p>
            <li>Contact</li>
            <li>Support</li>
            <li>Destinations</li>
            <li>Sponsorships</li>
          </ul>

          <ul>
            <p>Videos</p>
            <li>Submit Video</li>
            <li>Ambassadors</li>
            <li>Agency</li>
            <li>Influencer</li>
          </ul>

          <ul>
            <p>Social Media</p>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
