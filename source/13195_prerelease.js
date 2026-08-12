// Module ID: 13195
// Function ID: 13196
// Name: prerelease
// Dependencies: [13181]

// Module 13195 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13181) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
