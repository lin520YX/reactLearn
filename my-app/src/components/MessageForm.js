import React, { Component } from 'react';
export default class MessageForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        let username = this.username.value;
        let content = this.content.value;
        this.props.addMessage({
            username,
            content,
            createAt: new Date()
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className='control-label'>用户名</label>
                    <input type="text" ref={x => this.username = x} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="content" className='control-label'>nei rong</label>
                    <input type="text" ref={x => this.content = x} className="form-control" />
                </div>
                <div className="form-group">
                    <button className='btn btn-primary' >发表</button>
                </div>
            </form>
        )
    }
}