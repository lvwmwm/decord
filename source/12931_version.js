// Module ID: 12931
// Function ID: 12932
// Name: version
// Dependencies: [12924]

// Module 12931 (version)

export default (arg0, arg1) => {
  const tmp = require(12924) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
