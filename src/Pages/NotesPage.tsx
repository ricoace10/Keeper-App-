import { useState } from "react";
import CreateArea from "../components/CreateArea";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Note from "../components/Note";

export interface NoteData {
  id: unknown;
  title: string;
  content: string;
}

function NotesPage() {
  const [notes, setNotes] = useState<NoteData[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function addNote(newNote: NoteData) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id: number) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default NotesPage;
