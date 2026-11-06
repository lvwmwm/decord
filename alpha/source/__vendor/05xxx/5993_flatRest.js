// Module ID: 5993
// Function ID: 5994
// Name: flatRest
// Dependencies: [5994, 5998, 6000]

// Module 5993 (flatRest)
import shortOut from "shortOut" /* 5994 */;
import overRest from "overRest" /* 5998 */;
import flatten from "flatten" /* 6000 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
