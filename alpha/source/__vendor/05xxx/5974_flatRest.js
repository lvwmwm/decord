// Module ID: 5974
// Function ID: 5975
// Name: flatRest
// Dependencies: [5975, 5979, 5981]

// Module 5974 (flatRest)
import shortOut from "shortOut" /* 5975 */;
import overRest from "overRest" /* 5979 */;
import flatten from "flatten" /* 5981 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
