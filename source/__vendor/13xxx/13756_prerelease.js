// Module ID: 13756
// Function ID: 13757
// Name: prerelease
// Dependencies: [13742]

// Module 13756 (prerelease)
import SemVer from "SemVer" /* 13742 */;


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
