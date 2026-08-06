// Module ID: 13037
// Function ID: 13038
// Name: version
// Dependencies: [13029]

// Module 13037 (version)

export default (str) => {
  const tmp = require(13029) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
