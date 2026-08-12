// Module ID: 13188
// Function ID: 13189
// Name: version
// Dependencies: [13181]

// Module 13188 (version)

export default (arg0, arg1) => {
  const tmp = require(13181) /* SemVer */(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
