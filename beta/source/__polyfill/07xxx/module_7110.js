// Module ID: 7110
// Function ID: 7111
// Dependencies: [7111, 7112]

// Module 7110
import _mod7111 from "module_7111" /* 7111 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod7111(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
