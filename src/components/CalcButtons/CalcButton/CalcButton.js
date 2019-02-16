import React from 'react';

const CalcButton = props => {
    return (
        <button className="calc-button">
            {props.value}
        </button>
    );
};

export default CalcButton;