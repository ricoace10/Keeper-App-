import Footer from "../components/Footer";
import Header from "../components/Header";
import Note from "../components/Note";
import notes from "../components/notes";

function NotesPage() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {notes.map((note) => (
          <Note key={note.key} title={note.title} content={note.content} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default NotesPage;
