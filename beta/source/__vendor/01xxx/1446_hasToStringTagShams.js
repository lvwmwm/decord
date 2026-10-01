// Module ID: 1446
// Function ID: 1447
// Name: hasToStringTagShams
// Dependencies: [1286]

// Module 1446 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1286 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
