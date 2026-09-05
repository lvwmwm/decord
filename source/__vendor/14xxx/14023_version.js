// Module ID: 14023
// Function ID: 14024
// Name: version
// Dependencies: [14015]

// Module 14023 (version)
import SemVer from "SemVer" /* 14015 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
