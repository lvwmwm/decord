// Module ID: 19787
// Function ID: 19788
// Name: createCompounder
// Dependencies: [5628, 19788, 19792]

// Module 19787 (createCompounder)
import arrayReduce from "arrayReduce" /* 5628 */;
import words from "words" /* 19788 */;
import deburr from "deburr" /* 19792 */;

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
