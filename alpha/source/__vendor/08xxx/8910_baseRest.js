// Module ID: 8910
// Function ID: 8911
// Name: baseRest
// Dependencies: [5826, 5830, 549]

// Module 8910 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5826 */;
import overRest from "overRest" /* 5830 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
