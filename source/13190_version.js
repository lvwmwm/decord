// Module ID: 13190
// Function ID: 13191
// Name: version
// Dependencies: [13182]

// Module 13190 (version)

export default (str) => {
  const tmp = require(13182) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
