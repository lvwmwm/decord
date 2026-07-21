// Module ID: 12666
// Function ID: 97311
// Name: prerelease
// Dependencies: []

// Module 12666 (prerelease)

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
