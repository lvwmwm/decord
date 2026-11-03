// Module ID: 5639
// Function ID: 5640
// Name: toPropertyKey
// Dependencies: [5640, 5641]

// Module 5639 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5640 */;
import _typeof from "_typeof" /* 5641 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
