// Module ID: 619
// Function ID: 620
// Name: assocIndexOf
// Dependencies: [620]

// Module 619 (assocIndexOf)
import eq from "eq" /* 620 */;


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
