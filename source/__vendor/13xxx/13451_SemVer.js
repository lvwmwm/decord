// Module ID: 13451
// Function ID: 13452
// Name: SemVer
// Dependencies: [13437]

// Module 13451 (SemVer)
import SemVer from "SemVer" /* 13437 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};
