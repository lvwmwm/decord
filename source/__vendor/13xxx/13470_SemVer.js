// Module ID: 13470
// Function ID: 13471
// Name: SemVer
// Dependencies: [13471]

// Module 13470 (SemVer)
import SemVer from "SemVer" /* 13471 */;


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
