import React from 'react';

const CalcButton = props => {
    return (
        <button className="calc-button" onClick={props.click}>
            {props.value}
        </button>
    );
};

export default CalcButton;