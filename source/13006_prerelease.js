// Module ID: 13006
// Function ID: 13007
// Name: prerelease
// Dependencies: [12992]

// Module 13006 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(12992) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
