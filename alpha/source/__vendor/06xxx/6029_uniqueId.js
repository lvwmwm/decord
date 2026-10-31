// Module ID: 6029
// Function ID: 6030
// Name: uniqueId
// Dependencies: [625]

// Module 6029 (uniqueId)
import toString from "toString" /* 625 */;

let c2 = 0;

export default function uniqueId(arg0) {
  c2 = c2 + 1;
  return toString(arg0) + c2;
};
