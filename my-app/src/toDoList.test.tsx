import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";


describe("Exercise 2.6.1 for to do list", () =>{

    test("read", () =>{
        render(<ToDoList />);

        const applesItem = screen.getByText("Apples");
        expect(applesItem).toBeInTheDocument;

        const bananaItem = screen.getByText("Bananas");
        expect(bananaItem).toBeInTheDocument;
    });


    test("number correct?", () =>{
        render(<ToDoList />);

        const appleCheckBox = screen.getAllByRole('checkbox');

    });
});