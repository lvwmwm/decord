// Module ID: 13034
// Function ID: 13035
// Name: prerelease
// Dependencies: [13020]

// Module 13034 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(13020) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
