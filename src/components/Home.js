//Import React, Link from React-Router
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Welcome</h1>
            <section>
                <p>
                    Welcome to this simple React calculator.
                </p>
                <p>
                    You can navigate to:
                </p>
                <ul>
                    <li><Link to="/input">Input</Link> - to input the numbers and operator</li>
                    <li><Link to="/expression">Expression</Link> - to input a simple mathematical expression</li>
                    <li><Link to="/history">History</Link> - to see the list of your previous calculations</li>
                </ul>
                <p>
                    The resources used include:
                </p>
                <ul>
                    <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a></li>
                    <li><a href="https://www.npmjs.com/package/react-uuid" target="_blank" rel="noopener noreferrer">React-UUID</a></li>
                    <li><a href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">React-Redux</a></li>
                    <li><a href="https://reactrouter.com/web/guides/quick-start" target="_blank" rel="noopener noreferrer">React-Router</a></li>
                </ul>
            </section>
        </>
    );
}

export default Home;