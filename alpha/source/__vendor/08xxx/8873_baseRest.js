// Module ID: 8873
// Function ID: 8874
// Name: baseRest
// Dependencies: [5789, 5793, 549]

// Module 8873 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5789 */;
import overRest from "overRest" /* 5793 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
