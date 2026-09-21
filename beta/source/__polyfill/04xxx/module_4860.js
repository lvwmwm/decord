// Module ID: 4860
// Function ID: 4861
// Dependencies: [4861, 4865, 4867]

// Module 4860
import shortOut from "shortOut" /* 4861 */;
import overRest from "overRest" /* 4865 */;
import flatten from "flatten" /* 4867 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
