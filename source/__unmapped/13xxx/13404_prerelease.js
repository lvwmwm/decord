// Module ID: 13404
// Function ID: 13405
// Name: prerelease
// Dependencies: [13390]

// Module 13404 (prerelease)
import SemVer from "SemVer" /* 13390 */;


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
