import React, { useState, useRef } from "react";
import { useOnClickOutside } from "react-super-hooks";

const ClickOutSideComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef();

    useOnClickOutside(ref, () => {
        setIsOpen(false);
    });

    return (
        <div className="wrapper">
            <h3><span>useOnClickOutside</span> hook</h3>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle menu</button>
            {isOpen && (
                <ul ref={ref}>
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                    <li>List Item 3</li>
                </ul>
            )}
        </div>
    );
}

export default ClickOutSideComponent;