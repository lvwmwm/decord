// Module ID: 17453
// Function ID: 17454
// Dependencies: [4951, 17454, 17458]

// Module 17453
import arrayReduce from "arrayReduce" /* 4951 */;
import words from "words" /* 17454 */;
import deburr from "deburr" /* 17458 */;

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    return tmp(tmp2(deburr(arg0).replace(closure_2, "")), closure_0, "");
  };
};
