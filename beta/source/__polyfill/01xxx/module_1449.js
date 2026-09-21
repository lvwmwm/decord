// Module ID: 1449
// Function ID: 1450
// Dependencies: [1290]

// Module 1449
import _mod1290 from "module_1290" /* 1290 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1290();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
