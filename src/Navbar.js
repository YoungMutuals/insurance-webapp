import { Link } from 'react-router-dom';


const Navbar = () => {
    return (  
        <nav className="navbar sticky-top">
            <h2>Young Mutuals</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/createcustomer">Create Cusomer</Link>
                <Link to="/addpolicy">Create Policy</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;