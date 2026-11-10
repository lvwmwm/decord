// Module ID: 5646
// Function ID: 5647
// Name: toPropertyKey
// Dependencies: [5647, 5648]

// Module 5646 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5647 */;
import _typeof from "_typeof" /* 5648 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
