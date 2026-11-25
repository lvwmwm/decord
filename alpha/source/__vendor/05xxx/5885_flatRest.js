// Module ID: 5885
// Function ID: 5886
// Name: flatRest
// Dependencies: [5886, 5890, 5892]

// Module 5885 (flatRest)
import shortOut from "shortOut" /* 5886 */;
import overRest from "overRest" /* 5890 */;
import flatten from "flatten" /* 5892 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  const tmp2 = overRest;
  return tmp(tmp2(arg0, undefined, flatten), "" + arg0);
};
