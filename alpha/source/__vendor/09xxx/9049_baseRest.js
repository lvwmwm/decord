// Module ID: 9049
// Function ID: 9050
// Name: baseRest
// Dependencies: [5994, 5998, 549]

// Module 9049 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5994 */;
import overRest from "overRest" /* 5998 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
