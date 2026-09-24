// Module ID: 18132
// Function ID: 18133
// Dependencies: [4912, 18133, 18137]

// Module 18132
import arrayReduce from "arrayReduce" /* 4912 */;
import words from "words" /* 18133 */;
import deburr from "deburr" /* 18137 */;

let closure_2 = RegExp("['\u2019]", "g");

export default function createCompounder(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const tmp = arrayReduce;
    const tmp2 = words;
    return tmp(tmp2(deburr(arg0).replace(closure_2, "")), closure_0, "");
  };
};
