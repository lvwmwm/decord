// Module ID: 13123
// Function ID: 13124
// Name: version
// Dependencies: [13115]

// Module 13123 (version)

export default (str) => {
  const tmp = require(13115) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
