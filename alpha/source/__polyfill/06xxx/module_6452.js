// Module ID: 6452
// Function ID: 6453
// Dependencies: [6453, 6454]

// Module 6452
import _mod6453 from "module_6453" /* 6453 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod6453(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
