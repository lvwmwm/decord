// Module ID: 8952
// Function ID: 8953
// Name: baseRest
// Dependencies: [5838, 5842, 549]

// Module 8952 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5838 */;
import overRest from "overRest" /* 5842 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
