// Module ID: 13477
// Function ID: 13478
// Name: version
// Dependencies: [13470]

// Module 13477 (version)
import SemVer from "SemVer" /* 13470 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
