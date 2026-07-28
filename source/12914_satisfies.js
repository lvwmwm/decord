// Module ID: 12914
// Function ID: 100237
// Name: satisfies
// Dependencies: [12912]

// Module 12914 (satisfies)

export default function satisfies(release, c147) {
  let tmp = require(12912) /* Range */;
  tmp = new tmp(c147, arg2);
  return tmp.test(release);
};
