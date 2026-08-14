// Module ID: 13208
// Function ID: 13209
// Name: prerelease
// Dependencies: [13194]

// Module 13208 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13194) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
