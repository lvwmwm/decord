// Module ID: 13521
// Function ID: 13522
// Name: SemVer
// Dependencies: [13504]

// Module 13521 (SemVer)
import SemVer from "SemVer" /* 13504 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
