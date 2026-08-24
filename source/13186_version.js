// Module ID: 13186
// Function ID: 13187
// Name: version
// Dependencies: [13178]

// Module 13186 (version)
import SemVer from "SemVer" /* 13178 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
