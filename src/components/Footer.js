import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-container">
          <SocialLinks styleClass="footer-links" />
        </div>
        <h4>
          copyright &copy;{new Date().getFullYear()}
          <span> Jesper Zachrisson </span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
