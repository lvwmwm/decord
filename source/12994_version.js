// Module ID: 12994
// Function ID: 12995
// Name: version
// Dependencies: [12987]

// Module 12994 (version)

export default (arg0, arg1) => {
  const tmp = require(12987) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
