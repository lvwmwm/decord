// Module ID: 4994
// Function ID: 4995
// Name: uniqueId
// Dependencies: [630]

// Module 4994 (uniqueId)
import _mod630 from "module_630" /* 630 */;

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return _mod630(arg0) + sum;
};
