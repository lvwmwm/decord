// Module ID: 14034
// Function ID: 14035
// Name: STANDARD_EASING
// Dependencies: [4218, 2]

// Module 14034 (STANDARD_EASING)
import set from "set" /* 2 */;
import _mod4218 from "module_4218" /* 4218 */;
import bezierResult1 from "module_0" /* 0 */;

const Easing = _mod4218.Easing;
const Easing2 = _mod4218.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = set.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = bezierResult1;
