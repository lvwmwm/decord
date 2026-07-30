// Module ID: 12907
// Function ID: 12908
// Name: version
// Dependencies: [12899]

// Module 12907 (version)

export default (str) => {
  const tmp = require(12899) /* SemVer */;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
