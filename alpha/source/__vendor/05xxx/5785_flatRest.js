// Module ID: 5785
// Function ID: 5786
// Name: flatRest
// Dependencies: [5786, 5790, 5792]

// Module 5785 (flatRest)
import shortOut from "shortOut" /* 5786 */;
import overRest from "overRest" /* 5790 */;
import flatten from "flatten" /* 5792 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
