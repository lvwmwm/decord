// Module ID: 5768
// Function ID: 5769
// Name: flatRest
// Dependencies: [5769, 5773, 5775]

// Module 5768 (flatRest)
import shortOut from "shortOut" /* 5769 */;
import overRest from "overRest" /* 5773 */;
import flatten from "flatten" /* 5775 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
