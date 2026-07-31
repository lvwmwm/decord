// Module ID: 12938
// Function ID: 12939
// Name: prerelease
// Dependencies: [12924]

// Module 12938 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(12924) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
