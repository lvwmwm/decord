// Module ID: 5830
// Function ID: 5831
// Name: toPropertyKey
// Dependencies: [5831, 5832]

// Module 5830 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5831 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
