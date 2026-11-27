// Module ID: 11181
// Function ID: 11182
// Name: DATA_LENGTH
// Dependencies: [1654]

// Module 11181 (DATA_LENGTH)
import _mod1654 from "module_1654" /* 1654 */;

let Easing;
const obj = { easeOutQuart: Easing.bezier(0.25, 1, 0.5, 1) };
Easing = _mod1654.Easing;
const Easing_export = obj;

export const DATA_LENGTH = { SINGLE_ITEM: 1, [1]: "SINGLE_ITEM", DOUBLE_ITEM: 2, [2]: "DOUBLE_ITEM" };
export { Easing_export as Easing };
