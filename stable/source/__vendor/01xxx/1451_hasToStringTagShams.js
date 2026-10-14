// Module ID: 1451
// Function ID: 1452
// Name: hasToStringTagShams
// Dependencies: [1297]

// Module 1451 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1297 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
