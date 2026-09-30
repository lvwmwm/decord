// Module ID: 6482
// Function ID: 6483
// Dependencies: [6483, 6484]

// Module 6482
import _mod6483 from "module_6483" /* 6483 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod6483(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
