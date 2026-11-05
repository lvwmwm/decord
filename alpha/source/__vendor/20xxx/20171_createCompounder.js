// Module ID: 20171
// Function ID: 20172
// Name: createCompounder
// Dependencies: [5994, 20172, 20176]

// Module 20171 (createCompounder)
import arrayReduce from "arrayReduce" /* 5994 */;
import words from "words" /* 20172 */;
import deburr from "deburr" /* 20176 */;

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
