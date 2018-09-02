import React, { Component } from 'React';
import jsonp from 'jsonp';
export default class Suggest extends Component {
    constructor(){
        super()
        this.state ={
            words:['a','b']
        }
    }
    search= (e)=>{
        let wd = e.target.value;
        jsonp('http://www.baidu.com/su?wd='+wd,{
        param:'cb'
        },(err,data)=>{
            this.setState({words:[...data.s]})
        })
        
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div class="col-sm-8 col-sm-offset-2">
                        <div class="panel panel-default">
                            <div class="panel-heading">

                                <input type="text" class="form-control" onChange={this.search} />
                                <div class="panel-body">
                                    <ul class="list-group">
                                        {
                                            this.state.words.map((word,index)=>{
                                                <li key={index} className='list-group-item'>{word}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}