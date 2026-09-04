// Module ID: 10692
// Function ID: 10693
// Name: DATA_LENGTH
// Dependencies: [1652]

// Module 10692 (DATA_LENGTH)
import cancelAnimation from "cancelAnimation" /* 1652 */;

const obj = { easeOutQuart: null };
const Easing = cancelAnimation.Easing;
obj[0] = Easing.bezier(0.25, 1, 0.5, 1);

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export const Easing = obj;
