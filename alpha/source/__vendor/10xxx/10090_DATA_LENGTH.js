// Module ID: 10090
// Function ID: 10091
// Name: DATA_LENGTH
// Dependencies: [1656]

// Module 10090 (DATA_LENGTH)
import _mod1656 from "module_1656" /* 1656 */;

let Easing;
const obj = { easeOutQuart: Easing.bezier(0.25, 1, 0.5, 1) };
Easing = _mod1656.Easing;
const Easing_export = obj;

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export { Easing_export as Easing };
