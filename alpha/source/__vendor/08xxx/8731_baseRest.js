// Module ID: 8731
// Function ID: 8732
// Name: baseRest
// Dependencies: [5248, 5252, 549]

// Module 8731 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5248 */;
import overRest from "overRest" /* 5252 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
