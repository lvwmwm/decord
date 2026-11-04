// Module ID: 5542
// Function ID: 5543
// Name: toPropertyKey
// Dependencies: [5543, 5544]

// Module 5542 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5543 */;
import _typeof from "_typeof" /* 5544 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
