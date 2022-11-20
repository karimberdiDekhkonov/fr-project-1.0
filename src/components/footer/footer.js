import { Component } from "react";
import FooterRows from "./FooterRows/FooterRows";

const footerList = [
  {
    first: "Features",
    second: "Cool stuff",
    third: "Random fetaures",
    fourth: "Team fetaures",
    fifth: "Stuff for developers",
    sixth: "Another one",
    seventh: "Last time",
  },
  {
    first: "Resources",
    second: "Resource",
    third: "Resource name",
    fourth: "Another resource",
    fifth: "Final resource",
  },
  {
    first: "About",
    second: "Team",
    third: "Locations",
    fourth: "Privacy",
    fifth: "Teams",
  }
]

class Footer extends Component{
    render(){
      return <footer>
          <div className="footer-box-1">
            <div className="img-box">
              <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="b" />
            </div>
            <div className="year-box">© 2017-2018</div>
          </div>
          {
            footerList.map((value) => <FooterRows data = {value} />)
          }
        </footer>
    }
  }

  export default Footer;