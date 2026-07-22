// Module ID: 12675
// Function ID: 97366
// Name: prerelease
// Dependencies: []

// Module 12675 (prerelease)

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
