// Module ID: 18122
// Function ID: 18123
// Dependencies: [4880, 18123, 18127]

// Module 18122
import arrayReduce from "arrayReduce" /* 4880 */;
import words from "words" /* 18123 */;
import deburr from "deburr" /* 18127 */;

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    return tmp(tmp2(deburr(arg0).replace(closure_2, "")), closure_0, "");
  };
};
