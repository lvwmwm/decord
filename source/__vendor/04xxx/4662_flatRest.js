// Module ID: 4662
// Function ID: 4663
// Name: flatRest
// Dependencies: [4663, 4667, 4669]

// Module 4662 (flatRest)
import shortOut from "shortOut" /* 4663 */;
import overRest from "overRest" /* 4667 */;
import flatten from "flatten" /* 4669 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
