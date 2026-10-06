// Module ID: 5041
// Function ID: 5042
// Name: uniqueId
// Dependencies: [638]

// Module 5041 (uniqueId)
import toString from "toString" /* 638 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
