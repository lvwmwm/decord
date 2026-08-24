// Module ID: 13192
// Function ID: 13193
// Name: prerelease
// Dependencies: [13178]

// Module 13192 (prerelease)
import SemVer from "SemVer" /* 13178 */;


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
