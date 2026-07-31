// Module ID: 12932
// Function ID: 12933
// Name: version
// Dependencies: [12924]

// Module 12932 (version)

export default (str) => {
  const tmp = require(12924) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
