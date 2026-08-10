// Module ID: 13129
// Function ID: 13130
// Name: prerelease
// Dependencies: [13115]

// Module 13129 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13115) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
