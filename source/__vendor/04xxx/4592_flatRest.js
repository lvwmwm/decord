// Module ID: 4592
// Function ID: 4593
// Name: flatRest
// Dependencies: [4593, 4597, 4599]

// Module 4592 (flatRest)
import shortOut from "shortOut" /* 4593 */;
import overRest from "overRest" /* 4597 */;
import flatten from "flatten" /* 4599 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
