// Module ID: 10633
// Function ID: 10634
// Name: DATA_LENGTH
// Dependencies: [1650]

// Module 10633 (DATA_LENGTH)
import _mod1650 from "module_1650" /* 1650 */;

let Easing;
const obj = { easeOutQuart: Easing.bezier(0.25, 1, 0.5, 1) };
Easing = _mod1650.Easing;
const Easing_export = obj;

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export { Easing_export as Easing };
