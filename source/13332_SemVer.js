// Module ID: 13332
// Function ID: 13333
// Name: SemVer
// Dependencies: [13318]

// Module 13332 (SemVer)
import SemVer from "SemVer" /* 13318 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};
