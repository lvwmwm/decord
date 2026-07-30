// Module ID: 12913
// Function ID: 12914
// Name: prerelease
// Dependencies: [12899]

// Module 12913 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(12899) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
