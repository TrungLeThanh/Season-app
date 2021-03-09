import React from 'react';
import './Error.css';

const Error = props => {
    return (
        <div className="error">
            <h1>:( ERRORR: {props.error}</h1>
        </div>
    );
}

export default Error;