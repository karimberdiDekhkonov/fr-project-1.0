import { Component } from "react";

class FooterRows extends Component{
    render(){

        const {first, second, third, fourth, fifth, sixth, seventh} = this.props.data;

        return <div className="footer-box-2">
        <a href='#' className="fw-bolder fs-4">{first}</a>
        <a href="#">{second}</a>
        <a href="#">{third}</a>
        <a href="#">{fourth}</a>
        <a href="#">{fifth}</a>
        <a href="#">{sixth}</a>
        <a href="#">{seventh}</a>
      </div>
    }
}

export default FooterRows;