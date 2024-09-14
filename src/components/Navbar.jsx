import {Link} from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}><p>SaffronBox</p></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to={'/about'}><p>About us</p></Link>
                    <Link className="nav-link" to={'/cart'}><p className="flex justify-center items-center"><IoCartOutline className="text-xl mr-2"/> Cart  </p></Link>
                    <Link className="nav-link" to={'/sign-in'}><p>Sign in</p></Link>
                </div>
            </div>
        </div>
    </nav>
}