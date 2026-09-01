// Module ID: 5865
// Function ID: 5866
// Name: toPropertyKey
// Dependencies: [5866, 5867]

// Module 5865 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5866 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
