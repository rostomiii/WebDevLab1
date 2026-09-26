import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Custom portfolio logo */}
                <Link to="/" className="logo">
                    RL
                </Link>

                {/* Main navigation */}
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

            </div>
        </header>
    );
}