// Module ID: 12999
// Function ID: 13000
// Name: version
// Dependencies: [12992]

// Module 12999 (version)

export default (arg0, arg1) => {
  const tmp = require(12992) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
