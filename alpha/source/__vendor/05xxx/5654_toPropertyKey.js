// Module ID: 5654
// Function ID: 5655
// Name: toPropertyKey
// Dependencies: [5655, 5656]

// Module 5654 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5655 */;
import _typeof from "_typeof" /* 5656 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
