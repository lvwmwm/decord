// Module ID: 5511
// Function ID: 5512
// Name: toPropertyKey
// Dependencies: [5512, 5513]

// Module 5511 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5512 */;
import _typeof from "_typeof" /* 5513 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
