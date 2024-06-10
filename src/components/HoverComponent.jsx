import React from 'react';
import { useHover } from 'react-super-hooks';

const HoverComponent = () => {
    const [hoverRef, isHovering] = useHover();

    return (
        <div className="wrapper">
            <h3><span>useHover</span> hook</h3>
            <span ref={hoverRef}>
                {isHovering ? 'Yes Hovering' : 'Not hovering'}
            </span>
        </div>
    );
};

export default HoverComponent;