// Module ID: 5825
// Function ID: 5826
// Name: flatRest
// Dependencies: [5826, 5830, 5832]

// Module 5825 (flatRest)
import shortOut from "shortOut" /* 5826 */;
import overRest from "overRest" /* 5830 */;
import flatten from "flatten" /* 5832 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
