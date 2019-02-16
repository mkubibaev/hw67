import React, {Component} from 'react';
import CalcDisplay from "../../components/CalcDisplay/CalcDisplay";
import CalcButtons from "../../components/CalcButtons/CalcButtons";

class Calc extends Component {
    render() {
        return (
            <div className="calc">
                <CalcDisplay/>
                <CalcButtons/>
            </div>
        );
    }
}

export default Calc;