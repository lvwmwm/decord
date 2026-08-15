// Module ID: 13130
// Function ID: 13131
// Name: version
// Dependencies: [13122]

// Module 13130 (version)

export default (str) => {
  const tmp = require(13122) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
