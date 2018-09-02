import React, { Component } from 'react';
import Message from './Message';
export default class MessageBox extends Component {
    render() {
        return (
            <ul className="list-group">
                                {
                                    this.props.message.map((item, index) => {
                                        return <Message item={item} index={index} removeMessage={this.props.removeMessage}/>
                                    })
                                }
                            </ul>
        )
    }
}