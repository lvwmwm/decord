// Module ID: 6144
// Function ID: 6145
// Name: flatRest
// Dependencies: [6145, 6149, 6151]

// Module 6144 (flatRest)
import shortOut from "shortOut" /* 6145 */;
import overRest from "overRest" /* 6149 */;
import flatten from "flatten" /* 6151 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
