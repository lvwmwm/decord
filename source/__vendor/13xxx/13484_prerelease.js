// Module ID: 13484
// Function ID: 13485
// Name: prerelease
// Dependencies: [13470]

// Module 13484 (prerelease)
import SemVer from "SemVer" /* 13470 */;


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
