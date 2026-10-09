// Module ID: 18351
// Function ID: 18352
// Name: createCompounder
// Dependencies: [5204, 18352, 18356]

// Module 18351 (createCompounder)
import arrayReduce from "arrayReduce" /* 5204 */;
import words from "words" /* 18352 */;
import deburr from "deburr" /* 18356 */;

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
