// Module ID: 13138
// Function ID: 13139
// Name: prerelease
// Dependencies: [13124]

// Module 13138 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13124) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
