// Module ID: 8841
// Function ID: 8842
// Name: baseRest
// Dependencies: [5774, 5778, 549]

// Module 8841 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5774 */;
import overRest from "overRest" /* 5778 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
