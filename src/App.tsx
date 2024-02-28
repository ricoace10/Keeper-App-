import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import NoPage from "./components/NoPage.tsx";
import Note from "./components/Note.tsx";
import notes from "./components/notes.ts";

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

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
      <NoPage />
    </div>
  );
}
export default App;
