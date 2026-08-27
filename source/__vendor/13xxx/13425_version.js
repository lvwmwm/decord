// Module ID: 13425
// Function ID: 13426
// Name: version
// Dependencies: [13417]

// Module 13425 (version)
import SemVer from "SemVer" /* 13417 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
