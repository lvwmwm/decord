// Module ID: 13196
// Function ID: 13197
// Name: prerelease
// Dependencies: [13182]

// Module 13196 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13182) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
