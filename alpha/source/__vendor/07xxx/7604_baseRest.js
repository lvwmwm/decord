// Module ID: 7604
// Function ID: 7605
// Name: baseRest
// Dependencies: [6082, 6086, 549]

// Module 7604 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 6082 */;
import overRest from "overRest" /* 6086 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
