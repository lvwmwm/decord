// Module ID: 13726
// Function ID: 13727
// Name: SemVer
// Dependencies: [13727]

// Module 13726 (SemVer)
import SemVer from "SemVer" /* 13727 */;


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
