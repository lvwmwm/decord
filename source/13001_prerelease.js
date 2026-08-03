// Module ID: 13001
// Function ID: 13002
// Name: prerelease
// Dependencies: [12987]

// Module 13001 (prerelease)

export default (arg0, arg1) => {
  const tmp = require(12987) /* SemVer */(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
