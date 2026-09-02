// Module ID: 1407
// Function ID: 1408
// Name: hasToStringTagShams
// Dependencies: [542]

// Module 1407 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 542 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
