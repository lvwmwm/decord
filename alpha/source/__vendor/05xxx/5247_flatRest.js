// Module ID: 5247
// Function ID: 5248
// Name: flatRest
// Dependencies: [5248, 5252, 5254]

// Module 5247 (flatRest)
import shortOut from "shortOut" /* 5248 */;
import overRest from "overRest" /* 5252 */;
import flatten from "flatten" /* 5254 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
