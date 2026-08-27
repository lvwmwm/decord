// Module ID: 5817
// Function ID: 5818
// Name: toPropertyKey
// Dependencies: [5818, 5819]

// Module 5817 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5818 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
