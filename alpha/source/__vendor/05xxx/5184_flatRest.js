// Module ID: 5184
// Function ID: 5185
// Name: flatRest
// Dependencies: [5185, 5189, 5191]

// Module 5184 (flatRest)
import shortOut from "shortOut" /* 5185 */;
import overRest from "overRest" /* 5189 */;
import flatten from "flatten" /* 5191 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
