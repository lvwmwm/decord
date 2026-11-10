// Module ID: 20288
// Function ID: 20289
// Name: createCompounder
// Dependencies: [5988, 20289, 20293]

// Module 20288 (createCompounder)
import arrayReduce from "arrayReduce" /* 5988 */;
import words from "words" /* 20289 */;
import deburr from "deburr" /* 20293 */;

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
