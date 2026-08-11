// Module ID: 1412
// Function ID: 1413
// Name: hasToStringTagShams
// Dependencies: [545]

// Module 1412 (hasToStringTagShams)

export default function hasToStringTagShams() {
  let toStringTag = require(545) /* hasSymbols */();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
