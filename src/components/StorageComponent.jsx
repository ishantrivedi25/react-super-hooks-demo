import React from "react";
import { useSessionStorage, useLocalStorage } from "react-super-hooks";

const StorageComponent = () => {
    const [name, setName, removeName] = useLocalStorage('name', '');
    const [favoriteColor, setFavoriteColor, removeFavoriteColor] = useSessionStorage('favoriteColor', '');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleColorChange = (event) => {
        setFavoriteColor(event.target.value);
    };

    return (
        <div className="wrapper">
            <h3><span>useStorage</span> hook</h3>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>&ensp;
                    <input
                        type="text"
                        value={name || ""}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="color">Favorite Color:</label>&ensp;
                    <input
                        type="text"
                        value={favoriteColor || ""}
                        onChange={handleColorChange}
                    />
                </div>
            </div>
            <div className="output">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Favorite Color:</strong> {favoriteColor}</p>
                <button onClick={removeName}>Remove Name</button>&ensp;
                <button onClick={removeFavoriteColor}>Remove Color</button>
            </div>
        </div >
    );
};

export default StorageComponent;