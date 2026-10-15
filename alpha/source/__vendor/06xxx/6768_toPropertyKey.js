// Module ID: 6768
// Function ID: 6769
// Name: toPropertyKey
// Dependencies: [6769, 6770]

// Module 6768 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6769 */;
import _typeof from "_typeof" /* 6770 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
