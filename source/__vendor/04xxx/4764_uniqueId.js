// Module ID: 4764
// Function ID: 4765
// Name: uniqueId
// Dependencies: [626]

// Module 4764 (uniqueId)
import toString from "toString" /* 626 */;

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return toString(arg0) + sum;
};
