// Module ID: 19956
// Function ID: 19957
// Name: createCompounder
// Dependencies: [5657, 19957, 19961]

// Module 19956 (createCompounder)
import arrayReduce from "arrayReduce" /* 5657 */;
import words from "words" /* 19957 */;
import deburr from "deburr" /* 19961 */;

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
