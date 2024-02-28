import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="a:link">Keeper</h1>
      </Link>
    </header>
  );
}

export default Header;
