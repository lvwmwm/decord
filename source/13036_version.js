// Module ID: 13036
// Function ID: 13037
// Name: version
// Dependencies: [13029]

// Module 13036 (version)

export default (arg0, arg1) => {
  const tmp = require(13029) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
