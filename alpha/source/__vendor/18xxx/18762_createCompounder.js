// Module ID: 18762
// Function ID: 18763
// Name: createCompounder
// Dependencies: [5264, 18763, 18767]

// Module 18762 (createCompounder)
import arrayReduce from "arrayReduce" /* 5264 */;
import words from "words" /* 18763 */;
import deburr from "deburr" /* 18767 */;

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
