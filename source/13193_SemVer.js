// Module ID: 13193
// Function ID: 13194
// Name: SemVer
// Dependencies: [13179]

// Module 13193 (SemVer)
import SemVer from "SemVer" /* 13179 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};
