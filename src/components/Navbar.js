import React,{useState} from "react";
import './Navbar.css'
function Navbar() {
  const [showMenu,setShowMenu] = useState(true);
  const handleShowMenu = () =>{
    setShowMenu(!showMenu);
  }

  

  

  return (
    <>
      <div className="navbar">
        <nav className="navbar-container">
          <div className="navbar-logo">
            <p>
              Adven&nbsp;
              <i className="fas fa-hiking" />
              &nbsp;ture
            </p>
          </div>
          <ul className={showMenu ? "navbar-links" : "navbar-links active"}>
            <li className="navbar-link">Home</li>
            <li className="navbar-link">Services</li>
            <li className="navbar-link">Products</li>
            <li>
              <button className="btn">sign up</button>
            </li>
          </ul>
          <div className="navbar-mobileMenu-sign">
            {showMenu && (
              <i className="fas fa-bars" onClick={handleShowMenu}></i>
            )}
            {!showMenu && (
              <i className="fas fa-times" onClick={handleShowMenu}></i>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
