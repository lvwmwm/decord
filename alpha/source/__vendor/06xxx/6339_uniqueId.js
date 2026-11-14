// Module ID: 6339
// Function ID: 6340
// Name: uniqueId
// Dependencies: [625]

// Module 6339 (uniqueId)
import toString from "toString" /* 625 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
