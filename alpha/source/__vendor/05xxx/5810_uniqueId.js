// Module ID: 5810
// Function ID: 5811
// Name: uniqueId
// Dependencies: [625]

// Module 5810 (uniqueId)
import toString from "toString" /* 625 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
