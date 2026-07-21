// Module ID: 12668
// Function ID: 97333
// Name: prerelease
// Dependencies: []

// Module 12668 (prerelease)

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
