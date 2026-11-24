// Module ID: 5397
// Function ID: 5398
// Name: toPropertyKey
// Dependencies: [5398, 5399]

// Module 5397 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5398 */;
import _typeof from "_typeof" /* 5399 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
