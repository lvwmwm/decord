// Module ID: 6825
// Function ID: 6826
// Name: toPropertyKey
// Dependencies: [6826, 6827]

// Module 6825 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6826 */;
import _typeof from "_typeof" /* 6827 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
