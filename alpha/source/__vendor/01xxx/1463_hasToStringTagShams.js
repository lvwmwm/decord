// Module ID: 1463
// Function ID: 1464
// Name: hasToStringTagShams
// Dependencies: [1309]

// Module 1463 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1309 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
