// Module ID: 13454
// Function ID: 13455
// Name: SemVer
// Dependencies: [13437]

// Module 13454 (SemVer)
import SemVer from "SemVer" /* 13437 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
