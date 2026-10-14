// Module ID: 8511
// Function ID: 8512
// Name: baseRest
// Dependencies: [5190, 5194, 549]

// Module 8511 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5190 */;
import overRest from "overRest" /* 5194 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
