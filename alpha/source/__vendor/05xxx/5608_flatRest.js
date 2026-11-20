// Module ID: 5608
// Function ID: 5609
// Name: flatRest
// Dependencies: [5609, 5613, 5615]

// Module 5608 (flatRest)
import shortOut from "shortOut" /* 5609 */;
import overRest from "overRest" /* 5613 */;
import flatten from "flatten" /* 5615 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
