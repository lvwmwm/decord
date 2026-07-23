// Module ID: 12789
// Function ID: 99522
// Name: prerelease
// Dependencies: [12775]

// Module 12789 (prerelease)

export default function prerelease(arg0, arg1) {
  const tmp = require(12775) /* parse */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
