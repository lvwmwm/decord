// Module ID: 8071
// Function ID: 8072
// Name: baseRest
// Dependencies: [5000, 5004, 549]

// Module 8071 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5000 */;
import overRest from "overRest" /* 5004 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
