import React from 'react';

const Props = (props) => {
    return (
        <div>
            <h1>Props Component</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default Props;