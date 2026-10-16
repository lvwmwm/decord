// Module ID: 6154
// Function ID: 6155
// Name: uniqueId
// Dependencies: [637]

// Module 6154 (uniqueId)
import toString from "toString" /* 637 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
