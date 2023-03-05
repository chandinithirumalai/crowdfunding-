// import { Link } from "react-router-dom";

// function Nav() {
//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/project">Project</Link>
//         </nav>
//     );
// }

// export default Nav;

import { Link } from "react-router-dom";
import './Nav.css'
function Nav(props) {
    const { loggedIn, setLoggedIn } = props
    const handleClick = () => {
        window.localStorage.removeItem("token")
        setLoggedIn(false)
    }
    return (
        <nav>
            <div id="navbar">
                <img src="public/FundDRIVER.jpg" alt="FundDriver-logo"/>
                <div id="btn-group">
                    <Link to="/" >Home</Link>
                    <Link to="/view-all-projects">Project</Link>
                    <div id="nav-right">
           
                    {!loggedIn && <Link to="/login" className="btn">Login In</Link>}
                    </div>
                    </div>
            {loggedIn && <button onClick={handleClick}>Sign Out</button>}
            </div>
        </nav>
    );
}
export default Nav;

