// Module ID: 5510
// Function ID: 5511
// Name: toPropertyKey
// Dependencies: [5511, 5512]

// Module 5510 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5511 */;
import _typeof from "_typeof" /* 5512 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
