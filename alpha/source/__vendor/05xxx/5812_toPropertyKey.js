// Module ID: 5812
// Function ID: 5813
// Name: toPropertyKey
// Dependencies: [5813, 5814]

// Module 5812 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5813 */;
import _typeof from "_typeof" /* 5814 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
