// Module ID: 13027
// Function ID: 13028
// Name: version
// Dependencies: [13020]

// Module 13027 (version)

export default (arg0, arg1) => {
  const tmp = require(13020) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
