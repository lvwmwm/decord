// Module ID: 13760
// Function ID: 13761
// Name: SemVer
// Dependencies: [13743]

// Module 13760 (SemVer)
import SemVer from "SemVer" /* 13743 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
