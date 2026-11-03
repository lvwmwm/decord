// Module ID: 5957
// Function ID: 5958
// Name: flatRest
// Dependencies: [5958, 5962, 5964]

// Module 5957 (flatRest)
import shortOut from "shortOut" /* 5958 */;
import overRest from "overRest" /* 5962 */;
import flatten from "flatten" /* 5964 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
