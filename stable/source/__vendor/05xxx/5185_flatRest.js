// Module ID: 5185
// Function ID: 5186
// Name: flatRest
// Dependencies: [5186, 5190, 5192]

// Module 5185 (flatRest)
import shortOut from "shortOut" /* 5186 */;
import overRest from "overRest" /* 5190 */;
import flatten from "flatten" /* 5192 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
