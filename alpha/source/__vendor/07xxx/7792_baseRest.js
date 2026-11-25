// Module ID: 7792
// Function ID: 7793
// Name: baseRest
// Dependencies: [5886, 5890, 549]

// Module 7792 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 5886 */;
import overRest from "overRest" /* 5890 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, arg1, identity), "" + arg0);
};
