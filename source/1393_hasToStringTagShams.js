// Module ID: 1393
// Function ID: 1394
// Name: hasToStringTagShams
// Dependencies: [545]

// Module 1393 (hasToStringTagShams)

export default function hasToStringTagShams() {
  let toStringTag = require(545) /* hasSymbols */();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
