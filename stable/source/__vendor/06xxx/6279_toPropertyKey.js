// Module ID: 6279
// Function ID: 6280
// Name: toPropertyKey
// Dependencies: [6280, 6281]

// Module 6279 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6280 */;
import _typeof from "_typeof" /* 6281 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
