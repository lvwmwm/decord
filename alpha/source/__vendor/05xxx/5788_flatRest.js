// Module ID: 5788
// Function ID: 5789
// Name: flatRest
// Dependencies: [5789, 5793, 5795]

// Module 5788 (flatRest)
import shortOut from "shortOut" /* 5789 */;
import overRest from "overRest" /* 5793 */;
import flatten from "flatten" /* 5795 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
