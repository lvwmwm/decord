// Module ID: 5822
// Function ID: 5823
// Name: toPropertyKey
// Dependencies: [5823, 5824]

// Module 5822 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5823 */;
import _typeof from "_typeof" /* 5824 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
