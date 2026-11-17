// Module ID: 20683
// Function ID: 20684
// Name: createCompounder
// Dependencies: [6161, 20684, 20688]

// Module 20683 (createCompounder)
import arrayReduce from "arrayReduce" /* 6161 */;
import words from "words" /* 20684 */;
import deburr from "deburr" /* 20688 */;

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
