// Module ID: 7104
// Function ID: 7105
// Dependencies: [7105, 7106]

// Module 7104
import _mod7105 from "module_7105" /* 7105 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod7105(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
