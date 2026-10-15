// Module ID: 8722
// Function ID: 8723
// Name: baseRest
// Dependencies: [5245, 5249, 549]

// Module 8722 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5245 */;
import overRest from "overRest" /* 5249 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
