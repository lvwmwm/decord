// Module ID: 7152
// Function ID: 7153
// Name: baseRest
// Dependencies: [5609, 5613, 549]

// Module 7152 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5609 */;
import overRest from "overRest" /* 5613 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
