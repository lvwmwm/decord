// Module ID: 5644
// Function ID: 5645
// Name: toPropertyKey
// Dependencies: [5645, 5646]

// Module 5644 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5645 */;
import _typeof from "_typeof" /* 5646 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
