import React, { useState } from "react";
import { useUpdateEffect } from "react-super-hooks";

const UpdateEffectComponent = () => {
    const [count, setCount] = useState(0);

    useUpdateEffect(() => {
        console.log("Alert: ", count);
    }, [count]);

    return (
        <div className="wrapper">
            <h3><span>useUpdateEffect</span> hook</h3>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
};

export default UpdateEffectComponent;