// Module ID: 5676
// Function ID: 5677
// Name: toPropertyKey
// Dependencies: [5677, 5678]

// Module 5676 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5677 */;
import _typeof from "_typeof" /* 5678 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
