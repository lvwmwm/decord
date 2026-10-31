// Module ID: 5837
// Function ID: 5838
// Name: flatRest
// Dependencies: [5838, 5842, 5844]

// Module 5837 (flatRest)
import shortOut from "shortOut" /* 5838 */;
import overRest from "overRest" /* 5842 */;
import flatten from "flatten" /* 5844 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
