// Module ID: 13782
// Function ID: 13783
// Name: version
// Dependencies: [13774]

// Module 13782 (version)
import SemVer from "SemVer" /* 13774 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
