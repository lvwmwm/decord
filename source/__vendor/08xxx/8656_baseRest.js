// Module ID: 8656
// Function ID: 8657
// Name: baseRest
// Dependencies: [4627, 4631, 634]

// Module 8656 (baseRest)
import identity from "identity" /* 634 */;
import shortOut from "shortOut" /* 4627 */;
import overRest from "overRest" /* 4631 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
