// Module ID: 4526
// Function ID: 4527
// Name: flatRest
// Dependencies: [4527, 4531, 4533]

// Module 4526 (flatRest)
import shortOut from "shortOut" /* 4527 */;
import overRest from "overRest" /* 4531 */;
import flatten from "flatten" /* 4533 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
