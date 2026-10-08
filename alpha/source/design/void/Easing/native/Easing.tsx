// Module ID: 14044
// Function ID: 14045
// Name: Easing
// Dependencies: [4810, 2]

// Module 14044 (Easing)
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import size from "module_2" /* 2 */;

const Easing = ReanimatedRexport.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const Easing2 = ReanimatedRexport.Easing;
const bezierResult1 = Easing2.bezier(0, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = bezierResult1;
