// Module ID: 8731
// Function ID: 8732
// Name: baseRest
// Dependencies: [4930, 4934, 549]

// Module 8731 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4930 */;
import overRest from "overRest" /* 4934 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
