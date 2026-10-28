// Module ID: 8907
// Function ID: 8908
// Name: baseRest
// Dependencies: [5824, 5828, 549]

// Module 8907 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5824 */;
import overRest from "overRest" /* 5828 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
