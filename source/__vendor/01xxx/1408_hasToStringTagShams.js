// Module ID: 1408
// Function ID: 1409
// Name: hasToStringTagShams
// Dependencies: [542]

// Module 1408 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 542 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
