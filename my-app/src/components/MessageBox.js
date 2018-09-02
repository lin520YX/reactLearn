import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import './MessageBox.css';
export default class MessageBox extends Component {
    constructor() {
        super();
        this.state = {
            message: [
                {
                    username: 'linyunfu',
                    content: '1233231',
                    createAt: new Date()
                }
            ]
        }
    }
    addMessage=(message)=>{
        let messages=[...this.state.message,message]
            this.setState({
                message:messages
            })
    }
    removeMessage = (index)=>{
        this.state.message.splice(index,1);
        this.setState({
            message:[...this.state.message]
        })
    }
    render() {
        return (
            <div className='container'>
                <div className="row col-sm-8 col-sm-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h2>留言板</h2>
                        </div>
                        <div className="panel-body">
                           <MessageList message={this.state.message} removeMessage={this.removeMessage}/>
                        </div>
                        <div className="panel-footer">
                            <MessageForm addMessage={this.addMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}