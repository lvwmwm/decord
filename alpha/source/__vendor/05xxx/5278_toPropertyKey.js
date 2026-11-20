// Module ID: 5278
// Function ID: 5279
// Name: toPropertyKey
// Dependencies: [5279, 5280]

// Module 5278 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5279 */;
import _typeof from "_typeof" /* 5280 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
