// Module ID: 5266
// Function ID: 5267
// Name: uniqueId
// Dependencies: [762]

// Module 5266 (uniqueId)
import toString from "toString" /* 762 */;

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return toString(arg0) + sum;
};
