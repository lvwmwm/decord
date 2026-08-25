// Module ID: 4612
// Function ID: 4613
// Name: uniqueId
// Dependencies: [762]

// Module 4612 (uniqueId)
import toString from "toString" /* 762 */;

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return toString(arg0) + sum;
};
