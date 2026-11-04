// Module ID: 5652
// Function ID: 5653
// Name: toPropertyKey
// Dependencies: [5653, 5654]

// Module 5652 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5653 */;
import _typeof from "_typeof" /* 5654 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
