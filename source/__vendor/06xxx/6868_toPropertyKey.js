// Module ID: 6868
// Function ID: 6869
// Name: toPropertyKey
// Dependencies: [6869, 6870]

// Module 6868 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6869 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
