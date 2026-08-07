// Module ID: 13057
// Function ID: 13058
// Name: prerelease
// Dependencies: [13043]

// Module 13057 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13043) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
