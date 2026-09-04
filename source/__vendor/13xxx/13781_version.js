// Module ID: 13781
// Function ID: 13782
// Name: version
// Dependencies: [13774]

// Module 13781 (version)
import SemVer from "SemVer" /* 13774 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
