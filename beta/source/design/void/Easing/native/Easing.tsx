// Module ID: 15272
// Function ID: 15273
// Name: Easing
// Dependencies: [5084, 2]

// Module 15272 (Easing)
import ReanimatedRexport from "ReanimatedRexport" /* 5084 */;
import size from "module_2" /* 2 */;

const Easing = ReanimatedRexport.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const Easing2 = ReanimatedRexport.Easing;
const bezierResult1 = Easing2.bezier(0, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = bezierResult1;
