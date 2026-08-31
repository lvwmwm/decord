// Module ID: 8624
// Function ID: 8625
// Name: baseRest
// Dependencies: [4595, 4599, 634]

// Module 8624 (baseRest)
import identity from "identity" /* 634 */;
import shortOut from "shortOut" /* 4595 */;
import overRest from "overRest" /* 4599 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
