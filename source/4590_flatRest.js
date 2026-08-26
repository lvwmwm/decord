// Module ID: 4590
// Function ID: 4591
// Name: flatRest
// Dependencies: [4591, 4595, 4597]

// Module 4590 (flatRest)
import shortOut from "shortOut" /* 4591 */;
import overRest from "overRest" /* 4595 */;
import flatten from "flatten" /* 4597 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
