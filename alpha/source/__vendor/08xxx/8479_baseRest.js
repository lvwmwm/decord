// Module ID: 8479
// Function ID: 8480
// Name: baseRest
// Dependencies: [5184, 5188, 549]

// Module 8479 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5184 */;
import overRest from "overRest" /* 5188 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
