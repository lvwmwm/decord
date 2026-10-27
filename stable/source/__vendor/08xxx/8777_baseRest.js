// Module ID: 8777
// Function ID: 8778
// Name: baseRest
// Dependencies: [5285, 5289, 549]

// Module 8777 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5285 */;
import overRest from "overRest" /* 5289 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
