// Module ID: 9064
// Function ID: 9065
// Name: baseRest
// Dependencies: [5999, 6003, 549]

// Module 9064 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5999 */;
import overRest from "overRest" /* 6003 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
