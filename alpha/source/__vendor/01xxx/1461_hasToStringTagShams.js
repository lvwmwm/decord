// Module ID: 1461
// Function ID: 1462
// Name: hasToStringTagShams
// Dependencies: [1299]

// Module 1461 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1299 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
