// Module ID: 4890
// Function ID: 4891
// Dependencies: [4891, 4895, 4897]

// Module 4890
import shortOut from "shortOut" /* 4891 */;
import overRest from "overRest" /* 4895 */;
import flatten from "flatten" /* 4897 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
