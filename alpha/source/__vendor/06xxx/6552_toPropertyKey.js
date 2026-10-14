// Module ID: 6552
// Function ID: 6553
// Name: toPropertyKey
// Dependencies: [6553, 6554]

// Module 6552 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6553 */;
import _typeof from "_typeof" /* 6554 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
