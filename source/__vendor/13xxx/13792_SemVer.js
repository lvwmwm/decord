// Module ID: 13792
// Function ID: 13793
// Name: SemVer
// Dependencies: [13775]

// Module 13792 (SemVer)
import SemVer from "SemVer" /* 13775 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
