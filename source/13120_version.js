// Module ID: 13120
// Function ID: 13121
// Name: version
// Dependencies: [13113]

// Module 13120 (version)

export default (arg0, arg1) => {
  const tmp = require(13113) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
