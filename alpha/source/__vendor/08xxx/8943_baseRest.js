// Module ID: 8943
// Function ID: 8944
// Name: baseRest
// Dependencies: [5833, 5837, 549]

// Module 8943 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5833 */;
import overRest from "overRest" /* 5837 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
