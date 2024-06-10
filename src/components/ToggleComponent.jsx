import React from "react";
import { useToggle } from "react-super-hooks";

export default function ToggleComponent() {
    const [bulbSwitch, toggleBulbSwitch] = useToggle(false);

    return (
        <div className="wrapper">
            <h3><span>useToggle</span> hook</h3>
            <div>
                <img
                    src={require(`../assets/images/bulb_${bulbSwitch ? "on" : "off"}.gif`)}
                    alt={`bulb ${bulbSwitch ? "on" : "off"}`}
                    title={`Turn ${bulbSwitch ? "OFF" : "ON"}`}
                    onClick={toggleBulbSwitch}
                    className="bulb"
                />
            </div>
            <button onClick={toggleBulbSwitch}>Turn {bulbSwitch ? "OFF" : "ON"}</button>
        </div>
    );
};