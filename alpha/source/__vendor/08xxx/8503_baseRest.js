// Module ID: 8503
// Function ID: 8504
// Name: baseRest
// Dependencies: [5186, 5190, 549]

// Module 8503 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5186 */;
import overRest from "overRest" /* 5190 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
