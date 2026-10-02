// Module ID: 627
// Function ID: 628
// Name: assocIndexOf
// Dependencies: [628]

// Module 627 (assocIndexOf)
import eq from "eq" /* 628 */;


export default function assocIndexOf(arg0, arg1) {
  let diff = tmp - 1;
  if (+arg0.length) {
    while (!eq(arg0[diff][0], arg1)) {
      let tmp6 = +diff;
      diff = tmp6 - 1;
    }
    return diff;
  }
  return -1;
};
