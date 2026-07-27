// Module ID: 12852
// Function ID: 99975
// Name: prerelease
// Dependencies: [12838]

// Module 12852 (prerelease)

export default function prerelease(arg0, arg1) {
  const tmp = require(12838) /* parse */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
