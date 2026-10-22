// Module ID: 19085
// Function ID: 19086
// Name: createCompounder
// Dependencies: [5793, 19086, 19090]

// Module 19085 (createCompounder)
import arrayReduce from "arrayReduce" /* 5793 */;
import words from "words" /* 19086 */;
import deburr from "deburr" /* 19090 */;

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
