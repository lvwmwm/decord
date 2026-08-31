// Module ID: 13488
// Function ID: 13489
// Name: SemVer
// Dependencies: [13471]

// Module 13488 (SemVer)
import SemVer from "SemVer" /* 13471 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
