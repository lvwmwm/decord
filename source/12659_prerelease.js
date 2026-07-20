// Module ID: 12659
// Function ID: 97288
// Name: prerelease
// Dependencies: [49]

// Module 12659 (prerelease)

export default function prerelease(arg0, arg1) {
  const tmp = require(dependencyMap[0])(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
