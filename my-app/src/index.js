import React, { Component } from 'react';
import {render} from 'react-dom';
import Slider from './components/Slider';
// import MessageBox from './components/MessageBox';
// import jsonp from 'jsonp';
// import Suggest from './components/Suggest';
// import propTypes from 'prop-types';
// import './index.css';
// //组件首字母大写
// // 1.封装props
// // 2.调用组建函数
// // 3。插入容器
// // let Message = ({msg}) => {
// //     return <h1>{msg}</h1>
// // }
// class Person extends Component {
//     constructor(){
//         super();
//         this.state = {
//             happy:true
//         }
//     }
//     static defaultProps = {
//         name: 'shabi'
//     }
//     static propTypes = {
//         name: propTypes.string,
//         age: propTypes.number.isRequired
//     }
//     // liftcycle function... load after
//     componentDidMount() {

//     }
//     handleClick=()=>{
//         this.setState({happy:!this.state.happy})
//     }
//     render() {
//         let heart = this.state.happy?'kaixin':'nanguo'
//         return (
//             <div>
//                 <p>mingzi:{this.props.name}</p>
//                 <p>age:{this.props.age}</p>
//                 <p>happy:{heart}</p>
//                 <button onClick={this.handleClick}>change</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Person name="aaa" age='15' />, document.getElementById('root'));
// /**
//  * @description 受控组件
//  */ 
// class Panel extends Component {
//     render(){
//         return (
//             <div className="panel panel-default">
//                 <PanelHead/>
//                 <PanelBody/>
//                 <PanelFooter/>
//             </div>
//         )
//     }
// }
// class PanelHead extends Component {
//     render(){
//         return (
//             <div className='panel-header'>
//             </div>
//         )
//     }
// }
// class PanelBody extends Component {
//     render(){
//         return (
//             <div className='panel-body'>
//             </div>
//         )
//     }
// }
// class PanelFooter extends Component {
//     render(){
//         return (
//             <div className='panel-footer'>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Panel/>, document.getElementById('root'));


/** 
 * 
 * 
 * @description 组件的生命周期
*/
// class Liftcycle extends Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 0
//         }
//     }
//     componentWillMount() {
//         // 组件将被挂载
//     }
//     componentDidMount() {
//         // 组件挂完成
//     }
//     handleClick = () => {
//         this.setState({
//             num: this.state.num + 1
//         }, () => {
//             console.log(this.state.num)
//         })

//     }
//     shouldComponentUpdate(newProps, newState) {
//         console.log('should')
//         if (newState.num % 5 === 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     componentWillUpdate() {
//         console.log('WillUpdate')
//     }
//     componentDidUpdate() {
//         console.log('更新完成')
//     }
//     render() {
//         return (
//             <div style={{ border: '1px solid red' }}>
//                 <button onClick={this.handleClick}>+</button>
//                 <div>{this.state.num}</div>
//                 <SubCounter num={this.state.num} />
//             </div>
//         )
//     }

// }
// class SubCounter extends Component {
//     componentWillReceiveProps(newProps) {
//         console.log(newProps + 'componentWillReceiveProps')
//     }
//     render() {
//         return (
//             <div style={{ border: '1px solid green', padding: '5px' }}>
//                 <p>{this.props.num}</p>
//             </div>
//         )
//     }
// }

// export default class Suggest extends Component {
//     constructor() {
//         super()
//         this.state = {
//             words: [],
//             index:-1,
//         }
//     }
//     search = (e) => {
//         let wd = e.target.value;
//         this.wd = wd
//         jsonp('http://www.baidu.com/su?wd=' + wd, {
//             param: 'cb'
//         }, (err, data) => {
//             this.setState({ words: data.s })
//         })
//         console.log(this.state.words)

//     }
//     keyDown=(e)=>{
     
//         let code = e.keyCode;
//          if(code==38||code==40){
//                 let index = this.state.index;
//                 if(code ==38){
//                     index --
//                     if(index<=-1){
//                         index=this.state.words.length-1
//                     }
//                 }else{
//                     index ++;
//                     if(index>=this.state.words.length){
//                         index=-1;
//                     }
//                 }
//                 this.setState({
//                     index
//                 })
             
//          }else if(code==13){
//             window.open(`http://www.baidu.com/s?wd=${this.wd}`, '_blank');
//          }   
//     }
  
//     shouldComponentUpdate() {
//         return true;
//     }
//     render() {
//         return (
//             <div className='container'>
//                 <div className='row'>
//                     <div className="col-sm-8 col-sm-offset-2">
//                         <div className="panel panel-default">
//                             <div className="panel-heading">
//                                 <input type="text" className="form-control" onChange={this.search} onKeyDown={this.keyDown} value={this.state.index==-1?this.wd:this.state.words[this.state.index]}/>
//                                 <div className="panel-body">
//                                     <ul className="list-group">
//                                         {this.state.words.map((item, key) => {
//                                              return   <li className={key === this.state.index ? 'list-group-item active' : "list-group-item"} key={key}>{item}</li>
//                                         })}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<MessageBox />, document.getElementById('root'));
let IMAGE_DATA =[
    {src:require('./image/1.jpg')},
    {src:require('./image/2.jpg')},
    {src:require('./image/3.jpg')},
]
console.log(IMAGE_DATA)
render(<Slider 
    items={IMAGE_DATA}
    speed={1.2}
    delay={2.1}
    pause={true}
    autoplay={true}
    dots={true}
    arrows={true}

/>, document.getElementById('root'));