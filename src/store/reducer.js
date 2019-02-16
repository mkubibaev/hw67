import {ENTER_NUM, ENTER_OPERATOR, CLEAR, CALC} from "./actions";

const initialState = {
    firstOperand: '',
    secondOperand: '',
    operator: '',
    result: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ENTER_NUM:
            if (state.operator && !state.result) {
                if (state.secondOperand !== '0' && state.secondOperand.length < 12) {
                    //ограничиваю длину вводимого значения

                    return {
                        ...state,
                        secondOperand: state.secondOperand + action.value
                    }
                }
                return state;
            } else if (!state.result) {
                if (state.firstOperand !== '0' && state.firstOperand.length < 12) {
                    return {
                        ...state,
                        firstOperand: state.firstOperand + action.value
                    };
                }
                return state;
            } else {
                return state;
            }

        case ENTER_OPERATOR:
            if (state.firstOperand && !state.secondOperand) {
                return {
                    ...state,
                    operator: action.value
                };
            }
            return state;

        case CLEAR:
            return {
                ...initialState
            };

        case CALC:
            if (state.firstOperand && state.secondOperand && state.operator) {

                const a = parseInt(state.firstOperand);
                const b = parseInt(state.secondOperand);

                switch (state.operator) {
                    case '+':
                        return {
                            ...state,
                            result: a + b
                        };
                    case '-':
                        return {
                            ...state,
                            result: a - b
                        };
                    case 'x':
                        return {
                            ...state,
                            result: a * b
                        };
                    case '/':
                        if (b !== 0) {
                            return {
                                ...state,
                                result: a / b
                            };
                        } else {
                            return {
                                ...state,
                                result: 'делить на 0 нельзя'
                            };
                        }

                    default:
                        return state;
                }
            }
            return state;
        default:
            return state
    }
};

export default reducer;