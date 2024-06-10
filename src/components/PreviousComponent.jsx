import React, { useState } from 'react';
import { usePrevious } from 'react-super-hooks';

function PreviousComponent() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div className="wrapper">
            <h3><span>usePrevious</span> hook</h3>
            <div>
                Now: {count}, before: {prevCount}
            </div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default PreviousComponent;