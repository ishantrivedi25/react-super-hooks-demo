import React, { useState } from "react";
import { useScript } from "react-super-hooks";

const items = ['React', 'Angular', 'Vue', 'Svelte', 'Ember'];

const ScriptComponent = () => {
    const { loading, error } = useScript(
        "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
    );

    const [shuffledArray, setShuffledArray] = useState(items);

    const shuffleItems = () => {
        if (typeof window !== "undefined" && window?._) {
            setShuffledArray(window._.shuffle(items));
        }
    };

    if (loading) return <p>Loading lodash...</p>
    if (error) return <p>Failed to load lodash</p>

    return (
        <div className="wrapper">
            <h3><span>useScript</span> hook</h3>
            <div>
                <h2>Shuffled Items</h2>
                <ul>
                    {shuffledArray.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button onClick={shuffleItems}>Shuffle</button>
            </div>
        </div>
    );
};

export default ScriptComponent;