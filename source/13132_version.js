// Module ID: 13132
// Function ID: 13133
// Name: version
// Dependencies: [13124]

// Module 13132 (version)

export default (str) => {
  const tmp = require(13124) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
