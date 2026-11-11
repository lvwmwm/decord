// Module ID: 11633
// Function ID: 11634
// Name: DATA_LENGTH
// Dependencies: [1652]

// Module 11633 (DATA_LENGTH)
import _mod1652 from "module_1652" /* 1652 */;

let Easing;
const obj = { easeOutQuart: Easing.bezier(0.25, 1, 0.5, 1) };
Easing = _mod1652.Easing;
const Easing_export = obj;

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export { Easing_export as Easing };
