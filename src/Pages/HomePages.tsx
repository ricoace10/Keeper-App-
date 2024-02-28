import { Link } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

function HomePage() {
  return (
    <div className="container">
      <h1>Hello User</h1>
      <Link to="/">
        <button type="submit">Welcome To Notes</button>
      </Link>
      <Footer />
      <Header />
    </div>
  );
}

export default HomePage;
