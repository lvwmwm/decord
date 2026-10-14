// Module ID: 18523
// Function ID: 18524
// Name: createCompounder
// Dependencies: [5209, 18524, 18528]

// Module 18523 (createCompounder)
import arrayReduce from "arrayReduce" /* 5209 */;
import words from "words" /* 18524 */;
import deburr from "deburr" /* 18528 */;

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
