import Link from 'next/link';
const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Crypto News
                </a>
                <ul className="nav">
                    <li className="nav-item">
                        <Link legacyBehavior href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link legacyBehavior href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link legacyBehavior href="/contact">
                            <a className="nav-link">Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Header;
