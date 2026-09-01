// Module ID: 13763
// Function ID: 13764
// Name: STANDARD_EASING
// Dependencies: [4217, 2]

// Module 13763 (STANDARD_EASING)
import set from "set" /* 2 */;
import _mod4217 from "module_4217" /* 4217 */;
import bezierResult1 from "module_0" /* 0 */;

const Easing = _mod4217.Easing;
const Easing2 = _mod4217.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = set.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = bezierResult1;
