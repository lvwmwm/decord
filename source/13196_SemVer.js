// Module ID: 13196
// Function ID: 13197
// Name: SemVer
// Dependencies: [13179]

// Module 13196 (SemVer)
import SemVer from "SemVer" /* 13179 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  const tmp = new SemVer(arg1, arg2);
  return obj.compare(tmp) || obj.compareBuild(tmp);
};
