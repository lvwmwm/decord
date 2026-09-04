// Module ID: 4629
// Function ID: 4630
// Name: flatRest
// Dependencies: [4630, 4634, 4636]

// Module 4629 (flatRest)
import shortOut from "shortOut" /* 4630 */;
import overRest from "overRest" /* 4634 */;
import flatten from "flatten" /* 4636 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
