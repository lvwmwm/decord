// Module ID: 7670
// Function ID: 7671
// Name: baseRest
// Dependencies: [6145, 6149, 549]

// Module 7670 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 6145 */;
import overRest from "overRest" /* 6149 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
