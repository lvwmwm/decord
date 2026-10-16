// Module ID: 18487
// Function ID: 18488
// Name: createCompounder
// Dependencies: [5205, 18488, 18492]

// Module 18487 (createCompounder)
import arrayReduce from "arrayReduce" /* 5205 */;
import words from "words" /* 18488 */;
import deburr from "deburr" /* 18492 */;

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
