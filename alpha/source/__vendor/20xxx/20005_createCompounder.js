// Module ID: 20005
// Function ID: 20006
// Name: createCompounder
// Dependencies: [5977, 20006, 20010]

// Module 20005 (createCompounder)
import arrayReduce from "arrayReduce" /* 5977 */;
import words from "words" /* 20006 */;
import deburr from "deburr" /* 20010 */;

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
