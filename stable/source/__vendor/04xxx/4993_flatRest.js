// Module ID: 4993
// Function ID: 4994
// Name: flatRest
// Dependencies: [4994, 4998, 5000]

// Module 4993 (flatRest)
import shortOut from "shortOut" /* 4994 */;
import overRest from "overRest" /* 4998 */;
import flatten from "flatten" /* 5000 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
