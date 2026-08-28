// Module ID: 13444
// Function ID: 13445
// Name: version
// Dependencies: [13436]

// Module 13444 (version)
import SemVer from "SemVer" /* 13436 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
