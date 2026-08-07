// Module ID: 13051
// Function ID: 13052
// Name: version
// Dependencies: [13043]

// Module 13051 (version)

export default (str) => {
  const tmp = require(13043) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
