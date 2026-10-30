// Module ID: 5832
// Function ID: 5833
// Name: flatRest
// Dependencies: [5833, 5837, 5839]

// Module 5832 (flatRest)
import shortOut from "shortOut" /* 5833 */;
import overRest from "overRest" /* 5837 */;
import flatten from "flatten" /* 5839 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
