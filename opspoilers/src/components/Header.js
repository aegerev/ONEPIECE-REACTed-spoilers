import '../styles/Header.css';

function Header () {
    // TODO: Add a style attribute to header and the h1 element

    return (
        <header className="header" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
            <h1 style={{ color: '#333', fontSize: '36px' }}> Welcome to the One Piece Spoiler Site!</h1>
        </header>
    );
}

export default Header;