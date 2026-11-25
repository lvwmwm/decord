// Module ID: 11134
// Function ID: 11135
// Name: DATA_LENGTH
// Dependencies: [1653]

// Module 11134 (DATA_LENGTH)
import _mod1653 from "module_1653" /* 1653 */;

let Easing;
const obj = { easeOutQuart: Easing.bezier(0.25, 1, 0.5, 1) };
Easing = _mod1653.Easing;
const Easing_export = obj;

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export { Easing_export as Easing };
