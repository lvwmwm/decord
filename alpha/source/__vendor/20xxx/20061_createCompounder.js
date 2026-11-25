// Module ID: 20061
// Function ID: 20062
// Name: createCompounder
// Dependencies: [5905, 20062, 20066]

// Module 20061 (createCompounder)
import arrayReduce from "arrayReduce" /* 5905 */;
import words from "words" /* 20062 */;
import deburr from "deburr" /* 20066 */;

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
