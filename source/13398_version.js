// Module ID: 13398
// Function ID: 13399
// Name: version
// Dependencies: [13390]

// Module 13398 (version)
import SemVer from "SemVer" /* 13390 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
