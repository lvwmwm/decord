// Module ID: 8730
// Function ID: 8731
// Name: baseRest
// Dependencies: [5247, 5251, 549]

// Module 8730 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5247 */;
import overRest from "overRest" /* 5251 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
