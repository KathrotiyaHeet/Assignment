import React, { useState } from 'react';

const StateComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>State Component</h1>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
}

export default StateComponent;
