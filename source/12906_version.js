// Module ID: 12906
// Function ID: 12907
// Name: version
// Dependencies: [12899]

// Module 12906 (version)

export default (arg0, arg1) => {
  const tmp = require(12899) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
