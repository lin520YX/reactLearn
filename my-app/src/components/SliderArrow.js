import React, { Component } from 'react';
import './slider.css'
export default class SliderArrow extends Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <div className="slider-arrows">
            <span className='arrow slider-left' onClick={()=>this.props.turn(-1)}>&lt;</span>
            <span className='arrow slider-right'onClick={()=>this.props.turn(1)}>&gt;</span>
            </div>
        )
    }
}