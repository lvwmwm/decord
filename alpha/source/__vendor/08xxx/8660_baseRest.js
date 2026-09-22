// Module ID: 8660
// Function ID: 8661
// Name: baseRest
// Dependencies: [4860, 4864, 549]

// Module 8660 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4860 */;
import overRest from "overRest" /* 4864 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
