// Module ID: 5748
// Function ID: 5749
// Name: flatRest
// Dependencies: [5749, 5753, 5755]

// Module 5748 (flatRest)
import shortOut from "shortOut" /* 5749 */;
import overRest from "overRest" /* 5753 */;
import flatten from "flatten" /* 5755 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
