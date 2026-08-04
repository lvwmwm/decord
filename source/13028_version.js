// Module ID: 13028
// Function ID: 13029
// Name: version
// Dependencies: [13021]

// Module 13028 (version)

export default (arg0, arg1) => {
  const tmp = require(13021) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
