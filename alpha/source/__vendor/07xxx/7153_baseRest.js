// Module ID: 7153
// Function ID: 7154
// Name: baseRest
// Dependencies: [5607, 5611, 549]

// Module 7153 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5607 */;
import overRest from "overRest" /* 5611 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
