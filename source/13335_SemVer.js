// Module ID: 13335
// Function ID: 13336
// Name: SemVer
// Dependencies: [13318]

// Module 13335 (SemVer)
import SemVer from "SemVer" /* 13318 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
