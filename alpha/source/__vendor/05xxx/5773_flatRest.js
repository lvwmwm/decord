// Module ID: 5773
// Function ID: 5774
// Name: flatRest
// Dependencies: [5774, 5778, 5780]

// Module 5773 (flatRest)
import shortOut from "shortOut" /* 5774 */;
import overRest from "overRest" /* 5778 */;
import flatten from "flatten" /* 5780 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
