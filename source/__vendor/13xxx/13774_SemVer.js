// Module ID: 13774
// Function ID: 13775
// Name: SemVer
// Dependencies: [13775]

// Module 13774 (SemVer)
import SemVer from "SemVer" /* 13775 */;


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
