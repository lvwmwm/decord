// Module ID: 17832
// Function ID: 17833
// Name: createCompounder
// Dependencies: [5013, 17833, 17837]

// Module 17832 (createCompounder)
import arrayReduce from "arrayReduce" /* 5013 */;
import words from "words" /* 17833 */;
import deburr from "deburr" /* 17837 */;

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
