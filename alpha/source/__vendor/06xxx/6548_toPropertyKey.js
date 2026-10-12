// Module ID: 6548
// Function ID: 6549
// Name: toPropertyKey
// Dependencies: [6549, 6550]

// Module 6548 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6549 */;
import _typeof from "_typeof" /* 6550 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
