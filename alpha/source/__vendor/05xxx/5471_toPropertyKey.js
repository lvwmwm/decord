// Module ID: 5471
// Function ID: 5472
// Name: toPropertyKey
// Dependencies: [5472, 5473]

// Module 5471 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5472 */;
import _typeof from "_typeof" /* 5473 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
