import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function Color() {
    const [input, setInput] = useState('');
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`flex justify-center items-center h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
            <textarea
                autoFocus
                className={`w-1/2 p-4 h-screen outline-none border ${theme === 'dark' ? 'border-gray-700 text-white bg-gray-800' : 'border-red-300 bg-white'}`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type  here..."
            />
            <div className={`w-1/2 p-4 h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                <ReactMarkdown>{input}</ReactMarkdown>
            </div>
            <button onClick={toggleTheme} className="absolute top-4 right-4 px-3 py-1 rounded-md bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 ">
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    );
}

export default Color;
