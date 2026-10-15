// Module ID: 5244
// Function ID: 5245
// Name: flatRest
// Dependencies: [5245, 5249, 5251]

// Module 5244 (flatRest)
import shortOut from "shortOut" /* 5245 */;
import overRest from "overRest" /* 5249 */;
import flatten from "flatten" /* 5251 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
