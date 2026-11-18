// Module ID: 20639
// Function ID: 20640
// Name: createCompounder
// Dependencies: [6154, 20640, 20644]

// Module 20639 (createCompounder)
import arrayReduce from "arrayReduce" /* 6154 */;
import words from "words" /* 20640 */;
import deburr from "deburr" /* 20644 */;

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
