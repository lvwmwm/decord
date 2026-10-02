// Module ID: 7837
// Function ID: 7838
// Name: baseRest
// Dependencies: [4940, 4944, 549]

// Module 7837 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4940 */;
import overRest from "overRest" /* 4944 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
