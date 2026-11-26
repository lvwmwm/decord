// Module ID: 20641
// Function ID: 20642
// Name: createCompounder
// Dependencies: [6154, 20642, 20646]

// Module 20641 (createCompounder)
import arrayReduce from "arrayReduce" /* 6154 */;
import words from "words" /* 20642 */;
import deburr from "deburr" /* 20646 */;

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
