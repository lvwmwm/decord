// Module ID: 6081
// Function ID: 6082
// Name: flatRest
// Dependencies: [6082, 6086, 6088]

// Module 6081 (flatRest)
import shortOut from "shortOut" /* 6082 */;
import overRest from "overRest" /* 6086 */;
import flatten from "flatten" /* 6088 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
