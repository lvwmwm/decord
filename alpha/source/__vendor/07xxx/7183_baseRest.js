// Module ID: 7183
// Function ID: 7184
// Name: baseRest
// Dependencies: [5638, 5642, 549]

// Module 7183 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5638 */;
import overRest from "overRest" /* 5642 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
