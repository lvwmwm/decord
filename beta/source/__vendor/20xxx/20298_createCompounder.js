// Module ID: 20298
// Function ID: 20299
// Name: createCompounder
// Dependencies: [6018, 20299, 20303]

// Module 20298 (createCompounder)
import arrayReduce from "arrayReduce" /* 6018 */;
import words from "words" /* 20299 */;
import deburr from "deburr" /* 20303 */;

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
