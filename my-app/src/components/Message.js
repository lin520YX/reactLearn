import React, { Component } from 'react';
export default class Message extends Component {
    render() {
        let {item,index} = this.props;
        return (
            <li className='list-group-item'>
            {item.username}:{item.content} 
            <button className='btn btn-danger btn-xs' onClick={()=>this.props.removeMessage(index)}>删除</button> 
            <span className='pull-right'>{item.createAt.toLocaleDateString()}</span>
            </li>
        )
    }
}