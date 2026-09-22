// Module ID: 4859
// Function ID: 4860
// Dependencies: [4860, 4864, 4866]

// Module 4859
import shortOut from "shortOut" /* 4860 */;
import overRest from "overRest" /* 4864 */;
import flatten from "flatten" /* 4866 */;


export default function flatRest(arg0) {
  const tmp = shortOut;
  return tmp(overRest(arg0, undefined, flatten), "" + arg0);
};
