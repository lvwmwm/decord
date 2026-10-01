// Module ID: 5040
// Function ID: 5041
// Name: uniqueId
// Dependencies: [626]

// Module 5040 (uniqueId)
import toString from "toString" /* 626 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
