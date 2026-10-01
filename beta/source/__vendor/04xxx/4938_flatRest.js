// Module ID: 4938
// Function ID: 4939
// Name: flatRest
// Dependencies: [4939, 4943, 4945]

// Module 4938 (flatRest)
import shortOut from "shortOut" /* 4939 */;
import overRest from "overRest" /* 4943 */;
import flatten from "flatten" /* 4945 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
