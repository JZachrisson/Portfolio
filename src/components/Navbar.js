import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FiMenu } from "react-icons/fi"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY < 100) {
          handleShow(false)
        } else handleShow(true)
      })
    }
  }, [])
  return (
    <nav className={`navbar ${show && "nav__black"}`}>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-name nav-name-link">
            <Link to="/" className="nav-name-link">
              Jesper Zachrisson
            </Link>
          </div>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FiMenu></FiMenu>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
