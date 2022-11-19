import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class PriceCard extends Component{
  render(){
    return <div className="container main-inner-box p-0 shadow">
    <div className="inner-top fs-3 mb-4">Free</div>
    <div className="inner-price fs-4"> <span className='price fw-bolder fs-1'>$0</span> / mo</div>
    <div className="inner-des px-5">10 users included 2 GB of storage Email support Help center access</div>
    <button className='btn btn-outline-primary mt-4 inner-btn'>Sign up for free</button>
  </div>
  }
}

class Header extends Component{
  render(){
    return <header className='container-fluid pt-3 shadow d-flex justify-content-between pe-5'>
        <div className="logo ms-3 fs-5">Company Name</div>
        <div className="boxes mt-1">
          <ul className='main-ul'>
            <li><a href="#">Features</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Pricing</a></li>
            <button type='button' className='btn btn-outline-primary'>Sign Up</button>
          </ul>
        </div>
      </header>
  }
}

class Footer extends Component{
  render(){
    return <footer>
        <div className="footer-box-1">
          <div className="img-box">
            <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="b" />
          </div>
          <div className="year-box">© 2017-2018</div>
        </div>
        <div className="footer-box-2">
          <a href='#' className="fw-bolder fs-4">Features</a>
          <a href="#">Cool stuff</a>
          <a href="#">Random fetaures</a>
          <a href="#">Team fetaures</a>
          <a href="#">Stuff for developers</a>
          <a href="#">Another one</a>
          <a href="#">Last time</a>
        </div>
        <div className="footer-box-3">
          <a href='#' className="fw-bolder fs-4">Resources</a>
          <a href="#">Resource</a>
          <a href="#">Resource name</a>
          <a href="#">Another resource</a>
          <a href="#">Final resource</a>
        </div>
        <div className="footer-box-4">
          <a href='#' className="fw-bolder fs-4">About</a>
          <a href="#">Team</a>
          <a href="#">Locations</a>
          <a href="#">Privacy</a>
          <a href="#">Teams</a>
        </div>
      </footer>
  }
}

class Main extends Component{
  render(){
    return <main className='d-flex flex-column text-center pt-5 mt-5 gap-3'>
        <div className="main-box1 fs-1 mt-2">
          Pricing
        </div>
        <div className="main-box2 fs-5">
        Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
        </div>
        <div className="main-box3 d-flex">
          <PriceCard/>
          <PriceCard/>
          <PriceCard/>
        </div>
      </main>
  }
}

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
