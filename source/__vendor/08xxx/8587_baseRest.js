// Module ID: 8587
// Function ID: 8588
// Name: baseRest
// Dependencies: [4592, 4596, 634]

// Module 8587 (baseRest)
import identity from "identity" /* 634 */;
import shortOut from "shortOut" /* 4592 */;
import overRest from "overRest" /* 4596 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
