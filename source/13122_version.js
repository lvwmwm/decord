// Module ID: 13122
// Function ID: 13123
// Name: version
// Dependencies: [13115]

// Module 13122 (version)

export default (arg0, arg1) => {
  const tmp = require(13115) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
