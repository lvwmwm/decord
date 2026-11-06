// Module ID: 20178
// Function ID: 20179
// Name: createCompounder
// Dependencies: [6013, 20179, 20183]

// Module 20178 (createCompounder)
import arrayReduce from "arrayReduce" /* 6013 */;
import words from "words" /* 20179 */;
import deburr from "deburr" /* 20183 */;

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
