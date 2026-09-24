// Module ID: 8693
// Function ID: 8694
// Name: baseRest
// Dependencies: [4893, 4897, 549]

// Module 8693 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4893 */;
import overRest from "overRest" /* 4897 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
