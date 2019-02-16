import React from 'react';
import CalcButton from "./CalcButton/CalcButton";

const CalcButtons = props => {
    return (
        <div className="calc-buttons">
            <div>
                <CalcButton value="7" click={props.clicked}/>
                <CalcButton value="8"/>
                <CalcButton value="9"/>
                <CalcButton value="+"/>
            </div>
            <div>
                <CalcButton value="4"/>
                <CalcButton value="5"/>
                <CalcButton value="6"/>
                <CalcButton value="-"/>
            </div>
            <div>
                <CalcButton value="1"/>
                <CalcButton value="2"/>
                <CalcButton value="3"/>
                <CalcButton value="x"/>
            </div>
            <div>
                <CalcButton value="<"/>
                <CalcButton value="0"/>
                <CalcButton value="="/>
                <CalcButton value="/"/>
            </div>
        </div>
    );
};

export default CalcButtons;