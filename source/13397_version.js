// Module ID: 13397
// Function ID: 13398
// Name: version
// Dependencies: [13390]

// Module 13397 (version)
import SemVer from "SemVer" /* 13390 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
