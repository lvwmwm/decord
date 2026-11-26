// Module ID: 5527
// Function ID: 5528
// Name: toPropertyKey
// Dependencies: [5528, 5529]

// Module 5527 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5528 */;
import _typeof from "_typeof" /* 5529 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
