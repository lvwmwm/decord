// Module ID: 13201
// Function ID: 13202
// Name: version
// Dependencies: [13194]

// Module 13201 (version)

export default (arg0, arg1) => {
  const tmp = require(13194) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
