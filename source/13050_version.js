// Module ID: 13050
// Function ID: 13051
// Name: version
// Dependencies: [13043]

// Module 13050 (version)

export default (arg0, arg1) => {
  const tmp = require(13043) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
