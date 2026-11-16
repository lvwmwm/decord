// Module ID: 20301
// Function ID: 20302
// Name: createCompounder
// Dependencies: [6018, 20302, 20306]

// Module 20301 (createCompounder)
import arrayReduce from "arrayReduce" /* 6018 */;
import words from "words" /* 20302 */;
import deburr from "deburr" /* 20306 */;

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
