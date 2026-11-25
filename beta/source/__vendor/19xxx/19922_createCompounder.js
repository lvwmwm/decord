// Module ID: 19922
// Function ID: 19923
// Name: createCompounder
// Dependencies: [5747, 19923, 19927]

// Module 19922 (createCompounder)
import arrayReduce from "arrayReduce" /* 5747 */;
import words from "words" /* 19923 */;
import deburr from "deburr" /* 19927 */;

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
