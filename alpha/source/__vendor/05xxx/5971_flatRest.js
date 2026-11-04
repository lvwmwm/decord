// Module ID: 5971
// Function ID: 5972
// Name: flatRest
// Dependencies: [5972, 5976, 5978]

// Module 5971 (flatRest)
import shortOut from "shortOut" /* 5972 */;
import overRest from "overRest" /* 5976 */;
import flatten from "flatten" /* 5978 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
