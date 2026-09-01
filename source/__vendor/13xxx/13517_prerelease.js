// Module ID: 13517
// Function ID: 13518
// Name: prerelease
// Dependencies: [13503]

// Module 13517 (prerelease)
import SemVer from "SemVer" /* 13503 */;


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
