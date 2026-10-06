// Module ID: 1452
// Function ID: 1453
// Name: hasToStringTagShams
// Dependencies: [1298]

// Module 1452 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1298 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
