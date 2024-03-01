import { useState } from "react";
import { NoteData } from "../Pages/NotesPage";

function CreateArea(props: { onAdd: (note: NoteData) => void }) {
  const [note, setNote] = useState<NoteData>({
    id: Math.random().toString(),
    title: "",
    content: "",
  });

  function handleChange(event: { target: { name: string; value: string } }) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event: { preventDefault: () => void }) {
    props.onAdd(note);
    setNote({
      id: Math.random().toString(),
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note.."
          rows={3}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
