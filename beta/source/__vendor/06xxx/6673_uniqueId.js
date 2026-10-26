// Module ID: 6673
// Function ID: 6674
// Name: uniqueId
// Dependencies: [637]

// Module 6673 (uniqueId)
import toString from "toString" /* 637 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
