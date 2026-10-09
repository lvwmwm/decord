// Module ID: 6546
// Function ID: 6547
// Name: toPropertyKey
// Dependencies: [6547, 6548]

// Module 6546 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6547 */;
import _typeof from "_typeof" /* 6548 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
