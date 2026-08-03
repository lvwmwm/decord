// Module ID: 12995
// Function ID: 12996
// Name: version
// Dependencies: [12987]

// Module 12995 (version)

export default (str) => {
  const tmp = require(12987) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
