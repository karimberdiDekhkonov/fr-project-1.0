import {Component} from 'react';
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

  export default PriceCard;