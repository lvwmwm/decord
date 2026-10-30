// Module ID: 19791
// Function ID: 19792
// Name: createCompounder
// Dependencies: [5852, 19792, 19796]

// Module 19791 (createCompounder)
import arrayReduce from "arrayReduce" /* 5852 */;
import words from "words" /* 19792 */;
import deburr from "deburr" /* 19796 */;

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
