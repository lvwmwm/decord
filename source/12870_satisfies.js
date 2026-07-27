// Module ID: 12870
// Function ID: 100064
// Name: satisfies
// Dependencies: [12868]

// Module 12870 (satisfies)

export default function satisfies(release, c147) {
  let tmp = require(12868) /* Range */;
  tmp = new tmp(c147, arg2);
  return tmp.test(release);
};
