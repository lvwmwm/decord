// Module ID: 18123
// Function ID: 18124
// Dependencies: [4910, 18124, 18128]

// Module 18123
import arrayReduce from "arrayReduce" /* 4910 */;
import words from "words" /* 18124 */;
import deburr from "deburr" /* 18128 */;

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    return tmp(tmp2(deburr(arg0).replace(closure_2, "")), closure_0, "");
  };
};
