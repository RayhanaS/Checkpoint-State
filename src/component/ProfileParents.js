import React, { Component } from 'react'
import Profile from './Profile';
import Photo from './IMG_4877.jpg';

export default class ProfileParents extends Component {
    constructor(props) {
        super(props);
    this.state = {
            Bio: 'Hello',
            Fullname: 'Rayhana Saula',
            Img: Photo ,
            show: false }
        }
    

    toggle () { 
        this.setState ({show: !this.state.show})
    }
    render() {
        {
        return (
            <div>
               <button onClick={() => this.toggle()}> {this.state.show ? "hide" : "show"} </button>
               {this.state.show ? <Profile 
                Fullname={this.state.Fullname} 
                Bio ={this.state.Bio} 
                Img={this.state.Img}
                /> : null}
            </div>
        )
    }
}
}
