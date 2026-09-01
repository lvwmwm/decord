// Module ID: 13518
// Function ID: 13519
// Name: SemVer
// Dependencies: [13504]

// Module 13518 (SemVer)
import SemVer from "SemVer" /* 13504 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};
