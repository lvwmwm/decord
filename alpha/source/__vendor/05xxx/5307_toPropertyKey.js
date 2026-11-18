// Module ID: 5307
// Function ID: 5308
// Name: toPropertyKey
// Dependencies: [5308, 5309]

// Module 5307 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5308 */;
import _typeof from "_typeof" /* 5309 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
