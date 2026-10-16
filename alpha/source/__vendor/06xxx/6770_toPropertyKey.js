// Module ID: 6770
// Function ID: 6771
// Name: toPropertyKey
// Dependencies: [6771, 6772]

// Module 6770 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6771 */;
import _typeof from "_typeof" /* 6772 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
