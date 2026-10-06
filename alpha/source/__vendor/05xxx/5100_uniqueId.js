// Module ID: 5100
// Function ID: 5101
// Name: uniqueId
// Dependencies: [637]

// Module 5100 (uniqueId)
import toString from "toString" /* 637 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
