// Module ID: 5759
// Function ID: 5760
// Name: toPropertyKey
// Dependencies: [5760, 5761]

// Module 5759 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5760 */;
import _typeof from "_typeof" /* 5761 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
