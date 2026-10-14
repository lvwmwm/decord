// Module ID: 5189
// Function ID: 5190
// Name: flatRest
// Dependencies: [5190, 5194, 5196]

// Module 5189 (flatRest)
import shortOut from "shortOut" /* 5190 */;
import overRest from "overRest" /* 5194 */;
import flatten from "flatten" /* 5196 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
