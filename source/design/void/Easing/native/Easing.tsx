// Module ID: 13650
// Function ID: 13651
// Name: STANDARD_EASING
// Dependencies: [4184, 2]

// Module 13650 (STANDARD_EASING)
import set from "set" /* 2 */;
import _mod4184 from "module_4184" /* 4184 */;
import bezierResult1 from "module_0" /* 0 */;

const Easing = _mod4184.Easing;
const Easing2 = _mod4184.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = set.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = bezierResult1;
