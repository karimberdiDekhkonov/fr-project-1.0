import {Component} from 'react';


class Header extends Component{
    render(){
      const { one, two, three, four} = this.props.data;
      return <header className='container-fluid pt-3 shadow d-flex justify-content-between pe-5'>
          <div className="logo ms-3 fs-5">Company Name</div>
          <div className="boxes mt-1">
            <ul className='main-ul'>
              <li><a href="#">{one}</a></li>
              <li><a href="#">{two}</a></li>
              <li><a href="#">{three}</a></li>
              <li><a href="#">{four}</a></li>
              <button type='button' className='btn btn-outline-primary'>Sign Up</button>
            </ul>
          </div>
        </header>
    }
  }
  export default Header;
  