// Module ID: 20260
// Function ID: 20261
// Name: createCompounder
// Dependencies: [5986, 20261, 20265]

// Module 20260 (createCompounder)
import arrayReduce from "arrayReduce" /* 5986 */;
import words from "words" /* 20261 */;
import deburr from "deburr" /* 20265 */;

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
