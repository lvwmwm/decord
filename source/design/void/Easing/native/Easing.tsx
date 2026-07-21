// Module ID: 12909
// Function ID: 98461
// Name: STANDARD_EASING
// Dependencies: []

// Module 12909 (STANDARD_EASING)
const Easing = require(dependencyMap[0]).Easing;
const Easing2 = require(dependencyMap[0]).Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = require("module_0");
