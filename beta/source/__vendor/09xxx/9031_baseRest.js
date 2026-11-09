// Module ID: 9031
// Function ID: 9032
// Name: baseRest
// Dependencies: [5967, 5971, 549]

// Module 9031 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5967 */;
import overRest from "overRest" /* 5971 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
