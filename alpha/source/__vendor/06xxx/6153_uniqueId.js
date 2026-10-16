// Module ID: 6153
// Function ID: 6154
// Name: uniqueId
// Dependencies: [637]

// Module 6153 (uniqueId)
import toString from "toString" /* 637 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
