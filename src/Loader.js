import React from 'react';

const Loader = (props) => {
    return (
        <div>
            <div className="ui active dimmer">
                <div className="ui text loader">{props.message}</div>
            </div>
        </div>
    );
};
// This will called if we don't pass the value - Works as Default object value
Loader.defaultProps = {
    message : "Loading..."
};

export default Loader;