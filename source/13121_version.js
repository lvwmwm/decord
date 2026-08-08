// Module ID: 13121
// Function ID: 13122
// Name: version
// Dependencies: [13113]

// Module 13121 (version)

export default (str) => {
  const tmp = require(13113) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
