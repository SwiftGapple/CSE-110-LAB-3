import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./StickyNotes";
import { AppMain } from "./appMain";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<AppMain />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<AppMain />);

// Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });

 test("read", () => {
    render(<AppMain />);

    const readNote1 = screen.getByText("test note 1 title");
    expect(readNote1).toBeInTheDocument();

    const readNote2 = screen.getByText("test note 2 title");
    expect(readNote2).toBeInTheDocument();

    const readNote3 = screen.getByText("test note 3 title");
    expect(readNote3).toBeInTheDocument();

    const readNote4 = screen.getByText("test note 4 title");
    expect(readNote4).toBeInTheDocument();

    const readNote5 = screen.getByText("test note 5 title");
    expect(readNote5).toBeInTheDocument();

    const readNote6 = screen.getByText("test note 6 title");
    expect(readNote6).toBeInTheDocument();
});


});

test("update",() => {
    render(<AppMain />);
    const editNote = screen.getByTestId("note-content-1");
    const testText: string = "edited test note 1"
    fireEvent.change(editNote, {target: {innerHTML: testText}})

    const newEditNote = screen.getByText(testText);
    expect(newEditNote).toBeInTheDocument();
});
