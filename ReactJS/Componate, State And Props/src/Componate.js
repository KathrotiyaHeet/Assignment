import React from 'react'

function Componate() {
    alert("Hello Alert...!")
}

export default class component extends React.Component {

    x = 12;

    y = function simplefun123() {
        alert("Hello Alert...!")
    }

    render() {
        return (
            <>
                {this.x}
                <h1 onClick={Componate}>Class Component {this.x} </h1>


                <button onClick={this.y}>Click Me</button>
            </>
        )
    }
}