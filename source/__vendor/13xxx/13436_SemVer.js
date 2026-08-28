// Module ID: 13436
// Function ID: 13437
// Name: SemVer
// Dependencies: [13437]

// Module 13436 (SemVer)
import SemVer from "SemVer" /* 13437 */;


export default (arg0, arg1) => {
  if (arg0 instanceof SemVer) {
    return arg0;
  } else {
    try {
      const tmp8 = new SemVer(arg0, arg1);
      return tmp8;
    } catch (tmp10) {
      if (tmp) {
        throw tmp10;
      } else {
        return null;
      }
    }
  }
};
