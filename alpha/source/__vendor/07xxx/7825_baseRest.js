// Module ID: 7825
// Function ID: 7826
// Name: baseRest
// Dependencies: [4932, 4936, 549]

// Module 7825 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4932 */;
import overRest from "overRest" /* 4936 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
