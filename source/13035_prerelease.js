// Module ID: 13035
// Function ID: 13036
// Name: prerelease
// Dependencies: [13021]

// Module 13035 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13021) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
