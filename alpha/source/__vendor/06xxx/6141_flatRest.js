// Module ID: 6141
// Function ID: 6142
// Name: flatRest
// Dependencies: [6142, 6146, 6148]

// Module 6141 (flatRest)
import shortOut from "shortOut" /* 6142 */;
import overRest from "overRest" /* 6146 */;
import flatten from "flatten" /* 6148 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
