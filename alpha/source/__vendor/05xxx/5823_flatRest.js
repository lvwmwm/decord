// Module ID: 5823
// Function ID: 5824
// Name: flatRest
// Dependencies: [5824, 5828, 5830]

// Module 5823 (flatRest)
import shortOut from "shortOut" /* 5824 */;
import overRest from "overRest" /* 5828 */;
import flatten from "flatten" /* 5830 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
