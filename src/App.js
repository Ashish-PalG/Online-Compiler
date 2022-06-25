import { useState } from 'react';
import './App.css';
import Editor from "@monaco-editor/react";
import Navbar from './Components/Navbar';
import Axios from 'axios';
import spinner from './spinner.svg';

const App = () => {
  const [userCode, setUser] = useState(``);
  const [userLang, setUserLang] = useState("C++");
  const 
}