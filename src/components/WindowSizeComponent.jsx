import React from 'react';
import { useWindowSize } from 'react-super-hooks';

const WindowSizeComponent = () => {
    const { width, height } = useWindowSize();

    return (
        <div className="wrapper">
            <h3><span>useWindowSize</span> hook</h3>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    );
};

export default WindowSizeComponent;