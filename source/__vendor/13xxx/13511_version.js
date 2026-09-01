// Module ID: 13511
// Function ID: 13512
// Name: version
// Dependencies: [13503]

// Module 13511 (version)
import SemVer from "SemVer" /* 13503 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
