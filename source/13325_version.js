// Module ID: 13325
// Function ID: 13326
// Name: version
// Dependencies: [13317]

// Module 13325 (version)
import SemVer from "SemVer" /* 13317 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
