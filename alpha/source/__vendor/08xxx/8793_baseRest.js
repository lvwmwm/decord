// Module ID: 8793
// Function ID: 8794
// Name: baseRest
// Dependencies: [5749, 5753, 549]

// Module 8793 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5749 */;
import overRest from "overRest" /* 5753 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
