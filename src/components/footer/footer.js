import { Component } from "react";

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

  export default Footer;