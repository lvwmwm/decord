// Module ID: 8905
// Function ID: 8906
// Name: baseRest
// Dependencies: [5820, 5824, 549]

// Module 8905 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5820 */;
import overRest from "overRest" /* 5824 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
