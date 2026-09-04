// Module ID: 13789
// Function ID: 13790
// Name: SemVer
// Dependencies: [13775]

// Module 13789 (SemVer)
import SemVer from "SemVer" /* 13775 */;


export default (arg0, arg1, arg2) => {
  const obj = new SemVer(arg0, arg2);
  return obj.compare(new SemVer(arg1, arg2));
};
