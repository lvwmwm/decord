// Module ID: 13744
// Function ID: 13745
// Name: SemVer
// Dependencies: [13727]

// Module 13744 (SemVer)
import SemVer from "SemVer" /* 13727 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
