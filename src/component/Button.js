import React from 'react';

function Button(props) {
    return (
        <input type='button' onClick={props.handleClick} className='buttons' value={props.text}/>
    );
};

export default Button