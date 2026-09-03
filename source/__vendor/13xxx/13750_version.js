// Module ID: 13750
// Function ID: 13751
// Name: version
// Dependencies: [13742]

// Module 13750 (version)
import SemVer from "SemVer" /* 13742 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
