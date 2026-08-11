// Module ID: 13131
// Function ID: 13132
// Name: version
// Dependencies: [13124]

// Module 13131 (version)

export default (arg0, arg1) => {
  const tmp = require(13124) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
