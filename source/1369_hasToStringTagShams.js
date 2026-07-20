// Module ID: 1369
// Function ID: 16485
// Name: hasToStringTagShams
// Dependencies: []

// Module 1369 (hasToStringTagShams)

export default function hasToStringTagShams() {
  let toStringTag = require(dependencyMap[0])();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
