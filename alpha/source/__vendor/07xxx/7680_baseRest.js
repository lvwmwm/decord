// Module ID: 7680
// Function ID: 7681
// Name: baseRest
// Dependencies: [6142, 6146, 549]

// Module 7680 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 6142 */;
import overRest from "overRest" /* 6146 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
