// Module ID: 13189
// Function ID: 13190
// Name: version
// Dependencies: [13182]

// Module 13189 (version)

export default (arg0, arg1) => {
  const tmp = require(13182) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
