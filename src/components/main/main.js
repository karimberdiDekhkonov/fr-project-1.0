import { Component } from "react";
import PriceCard from "./PriceCard/PriceCard";

const cardList = [
  {
    type: "Free",
    price: 0,
    btnText: "Sign up for free"
  },
  {
    type: "Pro",
    price: 15,
    btnText: "Get started"
  },
  {
    type: "Enterprise",
    price: 29,
    btnText: "Contact us"
  }
]

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
            {
              cardList.map((value) => <PriceCard data = {value}/>)
            }
          </div>
        </main>
    }
  }

  export default Main;