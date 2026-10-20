// Module ID: 6621
// Function ID: 6622
// Name: uniqueId
// Dependencies: [637]

// Module 6621 (uniqueId)
import toString from "toString" /* 637 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
