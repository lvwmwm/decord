// Module ID: 19194
// Function ID: 19195
// Name: createCompounder
// Dependencies: [5807, 19195, 19199]

// Module 19194 (createCompounder)
import arrayReduce from "arrayReduce" /* 5807 */;
import words from "words" /* 19195 */;
import deburr from "deburr" /* 19199 */;

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
