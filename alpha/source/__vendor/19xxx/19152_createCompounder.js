// Module ID: 19152
// Function ID: 19153
// Name: createCompounder
// Dependencies: [5805, 19153, 19157]

// Module 19152 (createCompounder)
import arrayReduce from "arrayReduce" /* 5805 */;
import words from "words" /* 19153 */;
import deburr from "deburr" /* 19157 */;

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
