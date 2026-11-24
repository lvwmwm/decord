// Module ID: 5790
// Function ID: 5791
// Name: flatRest
// Dependencies: [5791, 5795, 5797]

// Module 5790 (flatRest)
import shortOut from "shortOut" /* 5791 */;
import overRest from "overRest" /* 5795 */;
import flatten from "flatten" /* 5797 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
