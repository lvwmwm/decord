// Module ID: 4732
// Function ID: 4733
// Name: uniqueId
// Dependencies: [759]

// Module 4732 (uniqueId)
import toString from "toString" /* 759 */;

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return toString(arg0) + sum;
};
