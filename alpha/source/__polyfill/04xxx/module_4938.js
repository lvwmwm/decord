// Module ID: 4938
// Function ID: 4939
// Dependencies: [4939, 4943, 4945]

// Module 4938
import shortOut from "shortOut" /* 4939 */;
import overRest from "overRest" /* 4943 */;
import flatten from "flatten" /* 4945 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
