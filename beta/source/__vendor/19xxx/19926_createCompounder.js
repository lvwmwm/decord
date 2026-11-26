// Module ID: 19926
// Function ID: 19927
// Name: createCompounder
// Dependencies: [5747, 19927, 19931]

// Module 19926 (createCompounder)
import arrayReduce from "arrayReduce" /* 5747 */;
import words from "words" /* 19927 */;
import deburr from "deburr" /* 19931 */;

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
