// Module ID: 5678
// Function ID: 5679
// Name: floor
// Dependencies: [1330]

// Module 5678 (floor)
import _mod1330 from "module_1330" /* 1330 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1330(arg0);
  }
  return tmp;
};
