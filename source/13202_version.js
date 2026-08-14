// Module ID: 13202
// Function ID: 13203
// Name: version
// Dependencies: [13194]

// Module 13202 (version)

export default (str) => {
  const tmp = require(13194) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
