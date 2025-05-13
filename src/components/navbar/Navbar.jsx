import "./navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="navbar_main_div">
     <div className="site_logo_first_div">
     <div className="site_logo_div"><img src="../../src/images/worldCinemaLogo.png" alt="World Cinema Logo" width="150px" height="150px"/></div>
     </div>
        
        <nav className="navibar">
            <Link  className="navbar_link" to="/">Home</Link>
            <Link className="navbar_link" to="/films">Films</Link>
            <Link className="navbar_link" to="/genres">Genres</Link>
            <Link className="navbar_link" to="/about">About Us</Link>
            <Link className="navbar_link" to="/addfilm">Add New Film</Link>
        </nav>
    </div>
  )
}

export default Navbar
