// Module ID: 6191
// Function ID: 6192
// Name: uniqueId
// Dependencies: [637]

// Module 6191 (uniqueId)
import toString from "toString" /* 637 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
