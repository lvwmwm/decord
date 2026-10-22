// Module ID: 19108
// Function ID: 19109
// Name: createCompounder
// Dependencies: [5793, 19109, 19113]

// Module 19108 (createCompounder)
import arrayReduce from "arrayReduce" /* 5793 */;
import words from "words" /* 19109 */;
import deburr from "deburr" /* 19113 */;

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
