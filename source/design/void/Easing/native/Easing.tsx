// Module ID: 13163
// Function ID: 13164
// Name: STANDARD_EASING
// Dependencies: [4050, 2]

// Module 13163 (STANDARD_EASING)
import { Easing } from "module_4050";
import { Easing as Easing2 } from "module_4050";
import bezierResult1 from "module_4050";

const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = require("set").fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = bezierResult1;
