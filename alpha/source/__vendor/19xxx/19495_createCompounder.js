// Module ID: 19495
// Function ID: 19496
// Name: createCompounder
// Dependencies: [5843, 19496, 19500]

// Module 19495 (createCompounder)
import arrayReduce from "arrayReduce" /* 5843 */;
import words from "words" /* 19496 */;
import deburr from "deburr" /* 19500 */;

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    const str = deburr(arg0);
    return tmp(tmp2(str.replace(closure_2, "")), closure_0, "");
  };
};
