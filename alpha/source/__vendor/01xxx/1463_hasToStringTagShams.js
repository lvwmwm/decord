// Module ID: 1463
// Function ID: 1464
// Name: hasToStringTagShams
// Dependencies: [1300]

// Module 1463 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1300 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
