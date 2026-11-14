// Module ID: 20633
// Function ID: 20634
// Name: createCompounder
// Dependencies: [6164, 20634, 20638]

// Module 20633 (createCompounder)
import arrayReduce from "arrayReduce" /* 6164 */;
import words from "words" /* 20634 */;
import deburr from "deburr" /* 20638 */;

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
