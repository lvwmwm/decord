// Module ID: 19222
// Function ID: 19223
// Name: createCompounder
// Dependencies: [5839, 19223, 19227]

// Module 19222 (createCompounder)
import arrayReduce from "arrayReduce" /* 5839 */;
import words from "words" /* 19223 */;
import deburr from "deburr" /* 19227 */;

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
