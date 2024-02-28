import { Link } from "react-router-dom";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Note from "../components/Note.tsx";

function createNotes(notesItem: {
  key: number;
  title: string;
  content: string;
}) {
  return (
    <Note
      key={notesItem.key}
      title={notesItem.title}
      content={notesItem.content}
    />
  );
}

function HomePage() {
  return (
    <div className="container">
      <Header />
      <h1>Hello User</h1>
      <Link to="/note">
        <button type="submit">Welcome To Notes</button>
      </Link>
      <Footer />
    </div>
  );
}

export default HomePage;
