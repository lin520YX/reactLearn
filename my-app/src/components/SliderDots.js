import React, { Component } from 'react';
import './slider.css'
export default class SliderDOts extends Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <div className='slider-dots'>
            {
                this.props.items.map((item,index)=>{
                    return <span 
                    className={"dot "+(index===this.props.index?"active":"")} key={index}
                     onClick={()=>this.props.turn(index-this.props.index)}>
                     </span>
                })
            }
           </div>
        )
    }
}