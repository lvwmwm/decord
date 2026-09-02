// Module ID: 13740
// Function ID: 13741
// Name: prerelease
// Dependencies: [13726]

// Module 13740 (prerelease)
import SemVer from "SemVer" /* 13726 */;


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
