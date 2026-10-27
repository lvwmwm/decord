// Module ID: 10522
// Function ID: 10523
// Name: DATA_LENGTH
// Dependencies: [1655]

// Module 10522 (DATA_LENGTH)
import _mod1655 from "module_1655" /* 1655 */;

let Easing;
const obj = { easeOutQuart: Easing.bezier(0.25, 1, 0.5, 1) };
Easing = _mod1655.Easing;
const Easing_export = obj;

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export { Easing_export as Easing };
