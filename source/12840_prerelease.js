// Module ID: 12840
// Function ID: 99843
// Name: prerelease
// Dependencies: [12826]

// Module 12840 (prerelease)

export default function prerelease(arg0, arg1) {
  const tmp = require(12826) /* parse */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
