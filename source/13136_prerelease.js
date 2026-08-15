// Module ID: 13136
// Function ID: 13137
// Name: prerelease
// Dependencies: [13122]

// Module 13136 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13122) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
