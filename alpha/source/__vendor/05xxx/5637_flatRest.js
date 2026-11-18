// Module ID: 5637
// Function ID: 5638
// Name: flatRest
// Dependencies: [5638, 5642, 5644]

// Module 5637 (flatRest)
import shortOut from "shortOut" /* 5638 */;
import overRest from "overRest" /* 5642 */;
import flatten from "flatten" /* 5644 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
