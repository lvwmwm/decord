// Module ID: 5998
// Function ID: 5999
// Name: flatRest
// Dependencies: [5999, 6003, 6005]

// Module 5998 (flatRest)
import shortOut from "shortOut" /* 5999 */;
import overRest from "overRest" /* 6003 */;
import flatten from "flatten" /* 6005 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
