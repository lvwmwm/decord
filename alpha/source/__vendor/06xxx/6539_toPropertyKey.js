// Module ID: 6539
// Function ID: 6540
// Name: toPropertyKey
// Dependencies: [6540, 6541]

// Module 6539 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6540 */;
import _typeof from "_typeof" /* 6541 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
