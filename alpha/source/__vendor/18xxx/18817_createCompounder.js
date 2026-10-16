// Module ID: 18817
// Function ID: 18818
// Name: createCompounder
// Dependencies: [5267, 18818, 18822]

// Module 18817 (createCompounder)
import arrayReduce from "arrayReduce" /* 5267 */;
import words from "words" /* 18818 */;
import deburr from "deburr" /* 18822 */;

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
