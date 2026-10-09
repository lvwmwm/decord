// Module ID: 1464
// Function ID: 1465
// Name: hasToStringTagShams
// Dependencies: [1310]

// Module 1464 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1310 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
