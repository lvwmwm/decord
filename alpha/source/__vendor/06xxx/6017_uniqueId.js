// Module ID: 6017
// Function ID: 6018
// Name: uniqueId
// Dependencies: [637]

// Module 6017 (uniqueId)
import toString from "toString" /* 637 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
