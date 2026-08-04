// Module ID: 13028
// Function ID: 13029
// Name: version
// Dependencies: [13020]

// Module 13028 (version)

export default (str) => {
  const tmp = require(13020) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
