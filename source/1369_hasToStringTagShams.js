// Module ID: 1369
// Function ID: 16491
// Name: hasToStringTagShams
// Dependencies: [522]

// Module 1369 (hasToStringTagShams)

export default function hasToStringTagShams() {
  let toStringTag = require(522) /* hasSymbols */();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
