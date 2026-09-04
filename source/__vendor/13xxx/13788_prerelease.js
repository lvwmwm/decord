// Module ID: 13788
// Function ID: 13789
// Name: prerelease
// Dependencies: [13774]

// Module 13788 (prerelease)
import SemVer from "SemVer" /* 13774 */;


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
