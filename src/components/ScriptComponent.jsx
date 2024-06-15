import React, { useState } from "react";
import { useScript } from "react-super-hooks";

const items = [
    { name: 'Vue', color: '#41B883' },
    { name: 'Svelte', color: '#FF3E00' },
    { name: 'Ember', color: '#E04E39' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Angular', color: '#DD0031' }
];

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
                <ul className="wrapper__section">
                    {shuffledArray.map(({ name, color }, index) => (
                        <li key={index} style={{ color }}>{name}</li>
                    ))}
                </ul>
                <button onClick={shuffleItems}>Shuffle</button>
            </div>
        </div>
    );
};

export default ScriptComponent;