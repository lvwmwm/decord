// Module ID: 20306
// Function ID: 20307
// Name: createCompounder
// Dependencies: [6018, 20307, 20311]

// Module 20306 (createCompounder)
import arrayReduce from "arrayReduce" /* 6018 */;
import words from "words" /* 20307 */;
import deburr from "deburr" /* 20311 */;

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
