// Module ID: 17489
// Function ID: 17490
// Name: createCompounder
// Dependencies: [4959, 17490, 17494]

// Module 17489 (createCompounder)
import arrayReduce from "arrayReduce" /* 4959 */;
import words from "words" /* 17490 */;
import deburr from "deburr" /* 17494 */;

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
