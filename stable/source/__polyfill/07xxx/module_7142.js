// Module ID: 7142
// Function ID: 7143
// Dependencies: [7143, 7144]

// Module 7142
import _mod7143 from "module_7143" /* 7143 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod7143(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
