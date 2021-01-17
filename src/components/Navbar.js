import React from "react"
import { FiMenu } from "react-icons/fi"
import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div>Jesper Zachrisson</div>
          <button type="button" className="toggle-btn">
            <FiMenu></FiMenu>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
