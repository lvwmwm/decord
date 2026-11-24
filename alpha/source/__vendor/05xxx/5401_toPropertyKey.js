// Module ID: 5401
// Function ID: 5402
// Name: toPropertyKey
// Dependencies: [5402, 5403]

// Module 5401 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5402 */;
import _typeof from "_typeof" /* 5403 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
