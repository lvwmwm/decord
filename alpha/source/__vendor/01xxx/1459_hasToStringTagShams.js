// Module ID: 1459
// Function ID: 1460
// Name: hasToStringTagShams
// Dependencies: [1298]

// Module 1459 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1298 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
