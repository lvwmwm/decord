// Module ID: 5183
// Function ID: 5184
// Name: flatRest
// Dependencies: [5184, 5188, 5190]

// Module 5183 (flatRest)
import shortOut from "shortOut" /* 5184 */;
import overRest from "overRest" /* 5188 */;
import flatten from "flatten" /* 5190 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
