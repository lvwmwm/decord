// Module ID: 18879
// Function ID: 18880
// Name: createCompounder
// Dependencies: [5304, 18880, 18884]

// Module 18879 (createCompounder)
import arrayReduce from "arrayReduce" /* 5304 */;
import words from "words" /* 18880 */;
import deburr from "deburr" /* 18884 */;

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
