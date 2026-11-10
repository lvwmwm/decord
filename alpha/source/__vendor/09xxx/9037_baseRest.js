// Module ID: 9037
// Function ID: 9038
// Name: baseRest
// Dependencies: [5969, 5973, 549]

// Module 9037 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5969 */;
import overRest from "overRest" /* 5973 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
