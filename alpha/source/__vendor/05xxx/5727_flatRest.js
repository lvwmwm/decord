// Module ID: 5727
// Function ID: 5728
// Name: flatRest
// Dependencies: [5728, 5732, 5734]

// Module 5727 (flatRest)
import shortOut from "shortOut" /* 5728 */;
import overRest from "overRest" /* 5732 */;
import flatten from "flatten" /* 5734 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
