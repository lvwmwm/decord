// Module ID: 9986
// Function ID: 9987
// Name: DATA_LENGTH
// Dependencies: [1634]

// Module 9986 (DATA_LENGTH)
import { Easing } from "cancelAnimation";

const obj = { easeOutQuart: null };
obj[0] = Easing.bezier(0.25, 1, 0.5, 1);

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export const Easing = obj;
