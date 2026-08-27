// Module ID: 13435
// Function ID: 13436
// Name: SemVer
// Dependencies: [13418]

// Module 13435 (SemVer)
import SemVer from "SemVer" /* 13418 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
