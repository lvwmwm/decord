// Module ID: 19232
// Function ID: 19233
// Name: createCompounder
// Dependencies: [5808, 19233, 19237]

// Module 19232 (createCompounder)
import arrayReduce from "arrayReduce" /* 5808 */;
import words from "words" /* 19233 */;
import deburr from "deburr" /* 19237 */;

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
