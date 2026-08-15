// Module ID: 13129
// Function ID: 13130
// Name: version
// Dependencies: [13122]

// Module 13129 (version)

export default (arg0, arg1) => {
  const tmp = require(13122) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
