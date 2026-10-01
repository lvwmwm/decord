// Module ID: 6286
// Function ID: 6287
// Name: toPropertyKey
// Dependencies: [6287, 6288]

// Module 6286 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6287 */;
import _typeof from "_typeof" /* 6288 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
