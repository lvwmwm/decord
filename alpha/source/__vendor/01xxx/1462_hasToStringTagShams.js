// Module ID: 1462
// Function ID: 1463
// Name: hasToStringTagShams
// Dependencies: [1300]

// Module 1462 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1300 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
