// Module ID: 1466
// Function ID: 1467
// Name: hasToStringTagShams
// Dependencies: [1312]

// Module 1466 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1312 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
