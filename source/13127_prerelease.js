// Module ID: 13127
// Function ID: 13128
// Name: prerelease
// Dependencies: [13113]

// Module 13127 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13113) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
