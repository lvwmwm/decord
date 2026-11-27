// Module ID: 20183
// Function ID: 20184
// Name: createCompounder
// Dependencies: [5936, 20184, 20188]

// Module 20183 (createCompounder)
import arrayReduce from "arrayReduce" /* 5936 */;
import words from "words" /* 20184 */;
import deburr from "deburr" /* 20188 */;

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
