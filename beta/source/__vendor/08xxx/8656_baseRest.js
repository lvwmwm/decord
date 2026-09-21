// Module ID: 8656
// Function ID: 8657
// Name: baseRest
// Dependencies: [4859, 4863, 549]

// Module 8656 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4859 */;
import overRest from "overRest" /* 4863 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
