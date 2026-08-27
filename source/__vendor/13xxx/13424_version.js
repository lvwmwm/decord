// Module ID: 13424
// Function ID: 13425
// Name: version
// Dependencies: [13417]

// Module 13424 (version)
import SemVer from "SemVer" /* 13417 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
