// Module ID: 19185
// Function ID: 19186
// Name: createCompounder
// Dependencies: [5807, 19186, 19190]

// Module 19185 (createCompounder)
import arrayReduce from "arrayReduce" /* 5807 */;
import words from "words" /* 19186 */;
import deburr from "deburr" /* 19190 */;

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
