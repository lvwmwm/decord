// Module ID: 6772
// Function ID: 6773
// Name: toPropertyKey
// Dependencies: [6773, 6774]

// Module 6772 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6773 */;
import _typeof from "_typeof" /* 6774 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
