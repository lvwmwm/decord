// Module ID: 13324
// Function ID: 13325
// Name: version
// Dependencies: [13317]

// Module 13324 (version)
import SemVer from "SemVer" /* 13317 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
