// Module ID: 8487
// Function ID: 8488
// Name: baseRest
// Dependencies: [5185, 5189, 549]

// Module 8487 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5185 */;
import overRest from "overRest" /* 5189 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
