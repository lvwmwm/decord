// Module ID: 4794
// Function ID: 4795
// Name: floor
// Dependencies: [563]

// Module 4794 (floor)
import _mod563 from "module_563" /* 563 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod563(arg0);
  }
  return tmp;
};
