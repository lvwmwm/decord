// Module ID: 5516
// Function ID: 5517
// Name: toPropertyKey
// Dependencies: [5517, 5518]

// Module 5516 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5517 */;
import _typeof from "_typeof" /* 5518 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
