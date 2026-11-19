// Module ID: 5606
// Function ID: 5607
// Name: flatRest
// Dependencies: [5607, 5611, 5613]

// Module 5606 (flatRest)
import shortOut from "shortOut" /* 5607 */;
import overRest from "overRest" /* 5611 */;
import flatten from "flatten" /* 5613 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
