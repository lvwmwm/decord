// Module ID: 20135
// Function ID: 20136
// Name: createCompounder
// Dependencies: [5991, 20136, 20140]

// Module 20135 (createCompounder)
import arrayReduce from "arrayReduce" /* 5991 */;
import words from "words" /* 20136 */;
import deburr from "deburr" /* 20140 */;

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
