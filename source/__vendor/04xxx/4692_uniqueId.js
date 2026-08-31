// Module ID: 4692
// Function ID: 4693
// Name: uniqueId
// Dependencies: [762]

// Module 4692 (uniqueId)
import toString from "toString" /* 762 */;

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return toString(arg0) + sum;
};
