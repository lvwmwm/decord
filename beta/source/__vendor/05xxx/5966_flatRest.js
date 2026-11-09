// Module ID: 5966
// Function ID: 5967
// Name: flatRest
// Dependencies: [5967, 5971, 5973]

// Module 5966 (flatRest)
import shortOut from "shortOut" /* 5967 */;
import overRest from "overRest" /* 5971 */;
import flatten from "flatten" /* 5973 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
