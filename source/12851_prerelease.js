// Module ID: 12851
// Function ID: 99970
// Name: prerelease
// Dependencies: [12837]

// Module 12851 (prerelease)

export default function prerelease(arg0, arg1) {
  const tmp = require(12837) /* parse */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
