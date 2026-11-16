// Module ID: 6134
// Function ID: 6135
// Name: flatRest
// Dependencies: [6135, 6139, 6141]

// Module 6134 (flatRest)
import shortOut from "shortOut" /* 6135 */;
import overRest from "overRest" /* 6139 */;
import flatten from "flatten" /* 6141 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
