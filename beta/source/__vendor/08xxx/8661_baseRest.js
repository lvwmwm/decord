// Module ID: 8661
// Function ID: 8662
// Name: baseRest
// Dependencies: [4861, 4865, 549]

// Module 8661 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4861 */;
import overRest from "overRest" /* 4865 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
