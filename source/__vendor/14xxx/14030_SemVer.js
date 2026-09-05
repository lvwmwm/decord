// Module ID: 14030
// Function ID: 14031
// Name: SemVer
// Dependencies: [14016]

// Module 14030 (SemVer)
import SemVer from "SemVer" /* 14016 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};
