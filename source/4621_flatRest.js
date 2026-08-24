// Module ID: 4621
// Function ID: 4622
// Name: flatRest
// Dependencies: [4622, 4626, 4628]

// Module 4621 (flatRest)
import shortOut from "shortOut" /* 4622 */;
import overRest from "overRest" /* 4626 */;
import flatten from "flatten" /* 4628 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
