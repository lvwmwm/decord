// Module ID: 20058
// Function ID: 20059
// Name: createCompounder
// Dependencies: [5905, 20059, 20063]

// Module 20058 (createCompounder)
import arrayReduce from "arrayReduce" /* 5905 */;
import words from "words" /* 20059 */;
import deburr from "deburr" /* 20063 */;

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
