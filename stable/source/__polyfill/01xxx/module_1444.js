// Module ID: 1444
// Function ID: 1445
// Dependencies: [1285]

// Module 1444
import _mod1285 from "module_1285" /* 1285 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1285();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
