import "./Header.css";

function Header(){
    return (
        <nav className="Nav">
            <div className="Nav-menus">
                <div className="Nav-brand">
                    <a className="Nav-brand-logo" href="/">
                    Instagram
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;