// Module ID: 5819
// Function ID: 5820
// Name: flatRest
// Dependencies: [5820, 5824, 5826]

// Module 5819 (flatRest)
import shortOut from "shortOut" /* 5820 */;
import overRest from "overRest" /* 5824 */;
import flatten from "flatten" /* 5826 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
