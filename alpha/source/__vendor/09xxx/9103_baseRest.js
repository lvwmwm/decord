// Module ID: 9103
// Function ID: 9104
// Name: baseRest
// Dependencies: [5975, 5979, 549]

// Module 9103 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5975 */;
import overRest from "overRest" /* 5979 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
