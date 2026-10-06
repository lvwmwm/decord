// Module ID: 10508
// Function ID: 10509
// Name: DATA_LENGTH
// Dependencies: [1643]

// Module 10508 (DATA_LENGTH)
import _mod1643 from "module_1643" /* 1643 */;

let Easing;
const obj = { easeOutQuart: Easing.bezier(0.25, 1, 0.5, 1) };
Easing = _mod1643.Easing;
const Easing_export = obj;

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export { Easing_export as Easing };
