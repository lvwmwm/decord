// Module ID: 7693
// Function ID: 7694
// Name: baseRest
// Dependencies: [5791, 5795, 549]

// Module 7693 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5791 */;
import overRest from "overRest" /* 5795 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
