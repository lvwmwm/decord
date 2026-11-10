// Module ID: 5968
// Function ID: 5969
// Name: flatRest
// Dependencies: [5969, 5973, 5975]

// Module 5968 (flatRest)
import shortOut from "shortOut" /* 5969 */;
import overRest from "overRest" /* 5973 */;
import flatten from "flatten" /* 5975 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
