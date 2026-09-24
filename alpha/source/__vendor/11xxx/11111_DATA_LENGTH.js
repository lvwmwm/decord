// Module ID: 11111
// Function ID: 11112
// Name: DATA_LENGTH
// Dependencies: [1637]

// Module 11111 (DATA_LENGTH)
import cancelAnimation from "cancelAnimation" /* 1637 */;

const obj = { easeOutQuart: null };
const Easing = cancelAnimation.Easing;
obj.easeOutQuart = Easing.bezier(0.25, 1, 0.5, 1);

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export const Easing = obj;
