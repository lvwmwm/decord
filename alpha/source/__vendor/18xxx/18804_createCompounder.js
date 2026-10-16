// Module ID: 18804
// Function ID: 18805
// Name: createCompounder
// Dependencies: [5266, 18805, 18809]

// Module 18804 (createCompounder)
import arrayReduce from "arrayReduce" /* 5266 */;
import words from "words" /* 18805 */;
import deburr from "deburr" /* 18809 */;

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
