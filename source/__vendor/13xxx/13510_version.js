// Module ID: 13510
// Function ID: 13511
// Name: version
// Dependencies: [13503]

// Module 13510 (version)
import SemVer from "SemVer" /* 13503 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
