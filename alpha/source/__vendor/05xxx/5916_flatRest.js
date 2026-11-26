// Module ID: 5916
// Function ID: 5917
// Name: flatRest
// Dependencies: [5917, 5921, 5923]

// Module 5916 (flatRest)
import shortOut from "shortOut" /* 5917 */;
import overRest from "overRest" /* 5921 */;
import flatten from "flatten" /* 5923 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
