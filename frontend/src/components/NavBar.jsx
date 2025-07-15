import { Link } from 'react-router-dom';

function NavBar() {
    return  <nav className='navbar'>
        <div className='navbar-brand'>
            <link to="/" className='nav-link'>Home</link>
            <Link to="/favorites" className='nav-link'>Favorites</Link>
            
        </div>
        <div></div>
    </nav>
}