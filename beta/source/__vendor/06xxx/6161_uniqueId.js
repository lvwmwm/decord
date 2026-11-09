// Module ID: 6161
// Function ID: 6162
// Name: uniqueId
// Dependencies: [625]

// Module 6161 (uniqueId)
import toString from "toString" /* 625 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
