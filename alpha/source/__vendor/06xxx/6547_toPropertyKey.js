// Module ID: 6547
// Function ID: 6548
// Name: toPropertyKey
// Dependencies: [6548, 6549]

// Module 6547 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6548 */;
import _typeof from "_typeof" /* 6549 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
