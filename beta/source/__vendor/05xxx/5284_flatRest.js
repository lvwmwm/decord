// Module ID: 5284
// Function ID: 5285
// Name: flatRest
// Dependencies: [5285, 5289, 5291]

// Module 5284 (flatRest)
import shortOut from "shortOut" /* 5285 */;
import overRest from "overRest" /* 5289 */;
import flatten from "flatten" /* 5291 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
