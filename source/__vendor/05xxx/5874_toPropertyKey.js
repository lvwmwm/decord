// Module ID: 5874
// Function ID: 5875
// Name: toPropertyKey
// Dependencies: [5875, 5876]

// Module 5874 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5875 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
