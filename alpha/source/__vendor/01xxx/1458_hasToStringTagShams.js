// Module ID: 1458
// Function ID: 1459
// Name: hasToStringTagShams
// Dependencies: [1297]

// Module 1458 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1297 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
