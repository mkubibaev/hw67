import React from 'react';

const CalcDisplay = props => (
    <div className="calc-display">
        <div className="result">{props.result}</div>
        <div className="operand">{props.operator} {props.secondOperand}</div>
        <div className="operand">{props.firstOperand ? props.firstOperand : 0}</div>
    </div>
);


export default CalcDisplay;