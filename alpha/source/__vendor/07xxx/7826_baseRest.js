// Module ID: 7826
// Function ID: 7827
// Name: baseRest
// Dependencies: [5917, 5921, 549]

// Module 7826 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5917 */;
import overRest from "overRest" /* 5921 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
