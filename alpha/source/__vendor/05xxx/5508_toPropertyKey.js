// Module ID: 5508
// Function ID: 5509
// Name: toPropertyKey
// Dependencies: [5509, 5510]

// Module 5508 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5509 */;
import _typeof from "_typeof" /* 5510 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
