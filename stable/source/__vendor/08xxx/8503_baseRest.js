// Module ID: 8503
// Function ID: 8504
// Name: baseRest
// Dependencies: [4739, 4743, 549]

// Module 8503 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4739 */;
import overRest from "overRest" /* 4743 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
