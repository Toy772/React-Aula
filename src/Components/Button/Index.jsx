import { Component } from "react";
import './Style.css';

export class Button extends Component {
    render(){
        const {text} = this.props;
        const {onClick} = this.props;
        const {disabled} = this.props
        return(
            <button  className="Button" onClick={onClick} disabled = {disabled}>{text}</button>
        )
    }
}