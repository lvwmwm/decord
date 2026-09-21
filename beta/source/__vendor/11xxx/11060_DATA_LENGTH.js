// Module ID: 11060
// Function ID: 11061
// Name: DATA_LENGTH
// Dependencies: [1641]

// Module 11060 (DATA_LENGTH)
import cancelAnimation from "cancelAnimation" /* 1641 */;

const obj = { easeOutQuart: null };
const Easing = cancelAnimation.Easing;
obj.easeOutQuart = Easing.bezier(0.25, 1, 0.5, 1);

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export const Easing = obj;
