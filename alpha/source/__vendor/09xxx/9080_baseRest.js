// Module ID: 9080
// Function ID: 9081
// Name: baseRest
// Dependencies: [5958, 5962, 549]

// Module 9080 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5958 */;
import overRest from "overRest" /* 5962 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
