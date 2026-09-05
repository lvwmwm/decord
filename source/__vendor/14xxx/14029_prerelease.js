// Module ID: 14029
// Function ID: 14030
// Name: prerelease
// Dependencies: [14015]

// Module 14029 (prerelease)
import SemVer from "SemVer" /* 14015 */;


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
