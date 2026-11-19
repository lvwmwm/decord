// Module ID: 5276
// Function ID: 5277
// Name: toPropertyKey
// Dependencies: [5277, 5278]

// Module 5276 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5277 */;
import _typeof from "_typeof" /* 5278 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
