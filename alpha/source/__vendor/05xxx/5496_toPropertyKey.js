// Module ID: 5496
// Function ID: 5497
// Name: toPropertyKey
// Dependencies: [5497, 5498]

// Module 5496 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5497 */;
import _typeof from "_typeof" /* 5498 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
