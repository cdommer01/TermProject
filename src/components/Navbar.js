import React from 'react'
import { Link } from 'react-router-dom'

function GetRGB(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+","+b+")";
}

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bgColor: GetRGB()
        };
    }
    changeColor = () =>{
        this.setState({bgColor: GetRGB()});
    }
    
    render(){
        return (
            <nav id="randNav" style={{backgroundColor: this.state.bgColor}}>
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">Random</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to='/'>Text</Link></li>
                    <li><Link to='/Image'>Image</Link></li>
                    <li><Link to='/Color'>Color</Link></li>
                    <li><Link to='/API'>API</Link></li>
                    <li><Link to='/About'>About</Link></li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
