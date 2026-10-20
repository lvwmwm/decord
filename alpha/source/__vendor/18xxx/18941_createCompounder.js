// Module ID: 18941
// Function ID: 18942
// Name: createCompounder
// Dependencies: [5768, 18942, 18946]

// Module 18941 (createCompounder)
import arrayReduce from "arrayReduce" /* 5768 */;
import words from "words" /* 18942 */;
import deburr from "deburr" /* 18946 */;

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
