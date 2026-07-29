// Module ID: 12911
// Function ID: 12912
// Name: version
// Dependencies: [12904]

// Module 12911 (version)

export default (arg0, arg1) => {
  const tmp = require(12904) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
