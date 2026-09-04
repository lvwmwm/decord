// Module ID: 8315
// Function ID: 8316
// Name: baseRest
// Dependencies: [4630, 4634, 631]

// Module 8315 (baseRest)
import identity from "identity" /* 631 */;
import shortOut from "shortOut" /* 4630 */;
import overRest from "overRest" /* 4634 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
