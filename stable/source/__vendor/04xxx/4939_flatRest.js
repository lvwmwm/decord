// Module ID: 4939
// Function ID: 4940
// Name: flatRest
// Dependencies: [4940, 4944, 4946]

// Module 4939 (flatRest)
import shortOut from "shortOut" /* 4940 */;
import overRest from "overRest" /* 4944 */;
import flatten from "flatten" /* 4946 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
