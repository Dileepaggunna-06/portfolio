import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiUser, FiFolder, FiMail } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-accent">&lt;</span>
          Portfolio
          <span className="logo-accent">/&gt;</span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <ul className="nav-links desktop-links">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              to="/"
              onClick={closeMenu}
            >
              <FiHome className="mobile-icon" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              to="/about"
              onClick={closeMenu}
            >
              <FiUser className="mobile-icon" />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              to="/projects"
              onClick={closeMenu}
            >
              <FiFolder className="mobile-icon" />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
              to="/contact"
              onClick={closeMenu}
            >
              <FiMail className="mobile-icon" />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Backdrop */}
      {isOpen && <div className="mobile-backdrop" onClick={closeMenu} />}
    </header>
  );
}

export default Navbar;

