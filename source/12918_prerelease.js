// Module ID: 12918
// Function ID: 12919
// Name: prerelease
// Dependencies: [12904]

// Module 12918 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(12904) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
