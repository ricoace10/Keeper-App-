import { Link } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

function HomePage() {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="user">Hello User</h1>
        <Link to="/note">
          <button type="submit">Welcome To Notes</button>
        </Link>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
