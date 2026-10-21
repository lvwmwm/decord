// Module ID: 8832
// Function ID: 8833
// Name: baseRest
// Dependencies: [5769, 5773, 549]

// Module 8832 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5769 */;
import overRest from "overRest" /* 5773 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
