// Module ID: 6353
// Function ID: 6354
// Name: toPropertyKey
// Dependencies: [6354, 6355]

// Module 6353 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6354 */;
import _typeof from "_typeof" /* 6355 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
