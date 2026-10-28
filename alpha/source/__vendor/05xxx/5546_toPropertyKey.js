// Module ID: 5546
// Function ID: 5547
// Name: toPropertyKey
// Dependencies: [5547, 5548]

// Module 5546 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5547 */;
import _typeof from "_typeof" /* 5548 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
