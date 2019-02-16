export const ENTER_NUM = 'ENTER_NUM';
export const ENTER_OPERATOR = 'ENTER_OPERATOR';
export const CLEAR = 'CLEAR';
export const CALC = 'CALC';

export const enterNum = value => {
    return {type: ENTER_NUM, value}
};

export const enterOperator = value => {
    return {type: ENTER_OPERATOR, value}
};

export const clear = () => {
    return {type: CLEAR,}
};

export const calc = () => {
    return {type: CALC}
};

