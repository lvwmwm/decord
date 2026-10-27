// Module ID: 18883
// Function ID: 18884
// Name: createCompounder
// Dependencies: [5304, 18884, 18888]

// Module 18883 (createCompounder)
import arrayReduce from "arrayReduce" /* 5304 */;
import words from "words" /* 18884 */;
import deburr from "deburr" /* 18888 */;

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
