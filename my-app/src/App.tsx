import React,{ useEffect, useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { ToggleTheme } from './clickCounter';
import { AppMain } from './appMain';
import { ThemeContext, themes } from './themeContext';
import { StickyNotes } from './StickyNotes';
import { ToDoList } from "./toDoList";
import { Route, Routes } from "react-router-dom";
import { Navbar } from './navbar';


function App() {

  return (     
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<StickyNotes />} />
      <Route path="/todolistL:name" element={<ToDoList />} />
    </Routes>
  </div>
  );
 };

export default App;