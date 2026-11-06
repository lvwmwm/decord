// Module ID: 5674
// Function ID: 5675
// Name: toPropertyKey
// Dependencies: [5675, 5676]

// Module 5674 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5675 */;
import _typeof from "_typeof" /* 5676 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
