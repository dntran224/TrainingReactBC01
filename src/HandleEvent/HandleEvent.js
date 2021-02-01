import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('haloooo');

    }

    showMessage = (name) => {
        alert('hello ' + name);

    }

    render() {
        return (
            <div>
                {/* cách 1: truyền callback trực tiếp */}
                <button id="btnClickMe" className="btn btn-success" onClick={this.handleClick}>Click Me</button>
                <button id="btnClickMe" className="btn btn-success" onClick={this.showMessage.bind(this,"Ted")}>Show Message!!!</button>
                <br/> <br />

                 {/* cách 2: truyền hàm nạc danh */}
                 <button onClick = {(event)=>{
                     this.showMessage('Chiko')
                     // this.handleClick();
                 }}>Show me</button>
            </div>
        );
    }
}