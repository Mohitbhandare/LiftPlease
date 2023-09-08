import "./Navbar.css"
import { Link } from "react-router-dom";
import { Link as ScrollLink} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
        LiftPlease
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/"></a> */}
              <ScrollLink className="nav-link" to="about-us" spy={true} smooth={true} offset={50} duration={100}>About</ScrollLink>
            </li>
          </ul>
          <div className="d-flex">
          <Link to='/createride' className="login_items">CreateRide</Link>
          </div>
          <div className="d-flex">
          <Link to='/Login' className="login_items"> Sign/Login In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
