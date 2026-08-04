// Module ID: 13029
// Function ID: 13030
// Name: version
// Dependencies: [13021]

// Module 13029 (version)

export default (str) => {
  const tmp = require(13021) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
