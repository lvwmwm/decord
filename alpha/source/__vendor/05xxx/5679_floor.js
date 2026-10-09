// Module ID: 5679
// Function ID: 5680
// Name: floor
// Dependencies: [1331]

// Module 5679 (floor)
import _mod1331 from "module_1331" /* 1331 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1331(arg0);
  }
  return tmp;
};
