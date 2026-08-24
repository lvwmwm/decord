// Module ID: 8088
// Function ID: 8089
// Name: baseRest
// Dependencies: [4622, 4626, 634]

// Module 8088 (baseRest)
import identity from "identity" /* 634 */;
import shortOut from "shortOut" /* 4622 */;
import overRest from "overRest" /* 4626 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
