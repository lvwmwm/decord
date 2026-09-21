// Module ID: 4858
// Function ID: 4859
// Dependencies: [4859, 4863, 4865]

// Module 4858
import shortOut from "shortOut" /* 4859 */;
import overRest from "overRest" /* 4863 */;
import flatten from "flatten" /* 4865 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
