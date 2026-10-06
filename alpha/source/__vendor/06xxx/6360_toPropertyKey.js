// Module ID: 6360
// Function ID: 6361
// Name: toPropertyKey
// Dependencies: [6361, 6362]

// Module 6360 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6361 */;
import _typeof from "_typeof" /* 6362 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
