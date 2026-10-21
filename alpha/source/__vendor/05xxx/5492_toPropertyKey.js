// Module ID: 5492
// Function ID: 5493
// Name: toPropertyKey
// Dependencies: [5493, 5494]

// Module 5492 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5493 */;
import _typeof from "_typeof" /* 5494 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
