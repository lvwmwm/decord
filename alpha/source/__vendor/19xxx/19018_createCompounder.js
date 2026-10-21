// Module ID: 19018
// Function ID: 19019
// Name: createCompounder
// Dependencies: [5788, 19019, 19023]

// Module 19018 (createCompounder)
import arrayReduce from "arrayReduce" /* 5788 */;
import words from "words" /* 19019 */;
import deburr from "deburr" /* 19023 */;

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
