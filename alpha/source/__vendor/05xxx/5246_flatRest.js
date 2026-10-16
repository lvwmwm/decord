// Module ID: 5246
// Function ID: 5247
// Name: flatRest
// Dependencies: [5247, 5251, 5253]

// Module 5246 (flatRest)
import shortOut from "shortOut" /* 5247 */;
import overRest from "overRest" /* 5251 */;
import flatten from "flatten" /* 5253 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
