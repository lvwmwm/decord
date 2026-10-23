// Module ID: 15214
// Function ID: 15215
// Name: Easing
// Dependencies: [5050, 2]

// Module 15214 (Easing)
import ReanimatedRexport from "ReanimatedRexport" /* 5050 */;
import size from "module_2" /* 2 */;

const Easing = ReanimatedRexport.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const Easing2 = ReanimatedRexport.Easing;
const bezierResult1 = Easing2.bezier(0, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = bezierResult1;
