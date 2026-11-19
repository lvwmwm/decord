// Module ID: 19967
// Function ID: 19968
// Name: createCompounder
// Dependencies: [5626, 19968, 19972]

// Module 19967 (createCompounder)
import arrayReduce from "arrayReduce" /* 5626 */;
import words from "words" /* 19968 */;
import deburr from "deburr" /* 19972 */;

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
