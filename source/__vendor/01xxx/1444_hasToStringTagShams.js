// Module ID: 1444
// Function ID: 1445
// Name: hasToStringTagShams
// Dependencies: [1287]

// Module 1444 (hasToStringTagShams)
import hasSymbols from "hasSymbols" /* 1287 */;


export default function hasToStringTagShams() {
  let toStringTag = hasSymbols();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
