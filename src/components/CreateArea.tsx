import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event: { target: { name: string; value: string } }) {
    const { name, value } = event.target;

    setNote((prevNote: string) => {
      return {
        prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event: { preventDefault: () => void }) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form action="">
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
        <button className="button" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
