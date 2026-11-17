// Module ID: 5816
// Function ID: 5817
// Name: toPropertyKey
// Dependencies: [5817, 5818]

// Module 5816 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5817 */;
import _typeof from "_typeof" /* 5818 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
