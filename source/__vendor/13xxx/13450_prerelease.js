// Module ID: 13450
// Function ID: 13451
// Name: prerelease
// Dependencies: [13436]

// Module 13450 (prerelease)
import SemVer from "SemVer" /* 13436 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
