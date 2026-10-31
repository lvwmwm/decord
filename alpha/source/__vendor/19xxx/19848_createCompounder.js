// Module ID: 19848
// Function ID: 19849
// Name: createCompounder
// Dependencies: [5857, 19849, 19853]

// Module 19848 (createCompounder)
import arrayReduce from "arrayReduce" /* 5857 */;
import words from "words" /* 19849 */;
import deburr from "deburr" /* 19853 */;

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
