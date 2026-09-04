// Module ID: 6808
// Function ID: 6809
// Name: toPropertyKey
// Dependencies: [6809, 6810]

// Module 6808 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6809 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
