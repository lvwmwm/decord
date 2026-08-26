// Module ID: 13408
// Function ID: 13409
// Name: SemVer
// Dependencies: [13391]

// Module 13408 (SemVer)
import SemVer from "SemVer" /* 13391 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
