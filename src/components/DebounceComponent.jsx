import React, { useState, useEffect } from "react"
import { useDebounce } from "react-super-hooks";

const DebounceComponent = () => {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 1500);

    useEffect(() => {
        if (debouncedQuery) {
            console.log(`Search query: ${debouncedQuery}`);
        }
    }, [debouncedQuery]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="wrapper">
            <h3><span>useDebounce</span> hook</h3>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Type to search..."
            />
            <p>Current query: {query}</p>
            <p>Debounced query: {debouncedQuery}</p>
        </div>
    );
};

export default DebounceComponent;