// Module ID: 13189
// Function ID: 13190
// Name: version
// Dependencies: [13181]

// Module 13189 (version)

export default (str) => {
  const tmp = require(13181) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
