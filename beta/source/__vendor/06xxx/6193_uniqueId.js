// Module ID: 6193
// Function ID: 6194
// Name: uniqueId
// Dependencies: [625]

// Module 6193 (uniqueId)
import toString from "toString" /* 625 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
