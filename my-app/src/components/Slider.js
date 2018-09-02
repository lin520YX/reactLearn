import React, { Component } from 'react';
import './slider.css'
import SliderItem from './SliderItem';
import SliderArrow from './SliderArrow';
import SliderDots from './SliderDots'
export default class Slider extends Component {
    constructor() {
        super();

        // modify index value change ul's left value
        this.state = {
            index: 0
        }
        console.log(this.state)
    }
    go = () => {
        this.$timer = setInterval(() => {
            this.turn(1)
        }, this.props.delay * 1000)
    }
    // new index
    turn = (step) => {
        console.log(step)
        let index = this.state.index + step;
        if(index<0){
            index=this.props.items.length-1;
        }
        if (index >= this.props.items.length) {
            index = 1;
          
        }
        console.log(index)
        this.setState({
            index
        })
        return;
    }
    componentDidMount() {
        // start slider
        if (this.props.autoplay) {
            this.go()
        }
    }
    render() {
       
        return (
            <div className='slider-wraper' onMouseOver={()=>clearInterval(this.$timer) } onMouseOut={()=>this.go()}>
                <SliderItem 
                items={this.props.items} 
                index={this.state.index} 
                speed={this.props.speed}
                />
               <SliderArrow turn={this.turn}/>
               <SliderDots 
               items={this.props.items}
               index={this.state.index}
               turn={this.turn}
               />
            </div>
        )
    }
}