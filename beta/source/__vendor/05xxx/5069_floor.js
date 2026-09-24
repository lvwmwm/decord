// Module ID: 5069
// Function ID: 5070
// Name: floor
// Dependencies: [1311]

// Module 5069 (floor)
import _mod1311 from "module_1311" /* 1311 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1311(arg0);
  }
  return tmp;
};
