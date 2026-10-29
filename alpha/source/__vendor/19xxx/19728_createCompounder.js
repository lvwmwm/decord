// Module ID: 19728
// Function ID: 19729
// Name: createCompounder
// Dependencies: [5845, 19729, 19733]

// Module 19728 (createCompounder)
import arrayReduce from "arrayReduce" /* 5845 */;
import words from "words" /* 19729 */;
import deburr from "deburr" /* 19733 */;

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
