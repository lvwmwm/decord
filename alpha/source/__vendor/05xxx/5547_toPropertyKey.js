// Module ID: 5547
// Function ID: 5548
// Name: toPropertyKey
// Dependencies: [5548, 5549]

// Module 5547 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5548 */;
import _typeof from "_typeof" /* 5549 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
