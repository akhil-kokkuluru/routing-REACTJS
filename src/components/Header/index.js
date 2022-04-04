import './index.css'
import {Link} from 'react-router-dom'

const NavElement = () => (
  <nav className="navEl">
    <ul className="listEL">
      <div className="logoContainer">
        <img
          className="logo"
          alt="wave"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        />
        <p className="navText">Wave</p>
      </div>

      <li>
        <Link className="navText" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="navText" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="navText" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default NavElement
