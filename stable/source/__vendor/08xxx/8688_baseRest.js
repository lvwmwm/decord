// Module ID: 8688
// Function ID: 8689
// Name: baseRest
// Dependencies: [4891, 4895, 549]

// Module 8688 (baseRest)
import identity from "identity" /* 549 */;
import shortOut from "shortOut" /* 4891 */;
import overRest from "overRest" /* 4895 */;


export default function baseRest(arg0, arg1) {
  const tmp = shortOut;
  return tmp(overRest(arg0, arg1, identity), "" + arg0);
};
