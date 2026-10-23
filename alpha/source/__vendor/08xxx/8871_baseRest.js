// Module ID: 8871
// Function ID: 8872
// Name: baseRest
// Dependencies: [5786, 5790, 549]

// Module 8871 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5786 */;
import overRest from "overRest" /* 5790 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
