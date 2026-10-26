// Module ID: 5787
// Function ID: 5788
// Name: flatRest
// Dependencies: [5788, 5792, 5794]

// Module 5787 (flatRest)
import shortOut from "shortOut" /* 5788 */;
import overRest from "overRest" /* 5792 */;
import flatten from "flatten" /* 5794 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
