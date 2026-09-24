// Module ID: 7136
// Function ID: 7137
// Dependencies: [7137, 7138]

// Module 7136
import _mod7137 from "module_7137" /* 7137 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod7137(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
