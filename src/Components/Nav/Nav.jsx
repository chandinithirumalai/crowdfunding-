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
            <div id="logo">
                <img src="src/images/Communitarian.png" alt="communitarian-logo" />
            </div>
            <div id="nav-right">
                {!loggedIn && <Link to="/login" className="btn">Login In</Link>}
                <div id="nav-controls">
                    <Link to="/" >Home</Link>
                    <Link to="/project">Project</Link>
                </div>
            </div>
            {loggedIn && <button onClick={handleClick}>Sign Out</button>}
        </nav>
    );
}
export default Nav;

