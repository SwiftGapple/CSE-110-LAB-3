import React,{ useEffect, useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { ToggleTheme } from './clickCounter';
import { ThemeContext, themes } from './themeContext';

export const StickyNotes = () => {
  //toggle theme button
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    console.log(currentTheme);
  };

  return (     
  <div>
    <ToggleTheme />
  </div>
  );
}