import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';


const listItems ={   
    one:"Features",
    two: "Enterprise",
    three: "Support",
    four: "Pricing"
    }
const hi = "";
function App() {
  return (
    <div className="App">
      <Header data = { listItems} />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
