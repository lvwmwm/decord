// Module ID: 10226
// Function ID: 10227
// Name: DATA_LENGTH
// Dependencies: [1638]

// Module 10226 (DATA_LENGTH)
import cancelAnimation from "cancelAnimation" /* 1638 */;

const obj = { easeOutQuart: null };
const Easing = cancelAnimation.Easing;
obj.easeOutQuart = Easing.bezier(0.25, 1, 0.5, 1);

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export const Easing = obj;
