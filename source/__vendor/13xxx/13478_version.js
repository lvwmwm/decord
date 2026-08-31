// Module ID: 13478
// Function ID: 13479
// Name: version
// Dependencies: [13470]

// Module 13478 (version)
import SemVer from "SemVer" /* 13470 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
