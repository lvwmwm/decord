// Module ID: 13043
// Function ID: 13044
// Name: prerelease
// Dependencies: [13029]

// Module 13043 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13029) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
