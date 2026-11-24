// Module ID: 7272
// Function ID: 7273
// Name: baseRest
// Dependencies: [5728, 5732, 549]

// Module 7272 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5728 */;
import overRest from "overRest" /* 5732 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
