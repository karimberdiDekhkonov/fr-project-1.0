import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
