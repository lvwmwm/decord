// Module ID: 13000
// Function ID: 13001
// Name: version
// Dependencies: [12992]

// Module 13000 (version)

export default (str) => {
  const tmp = require(12992) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
