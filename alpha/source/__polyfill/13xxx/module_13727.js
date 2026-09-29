// Module ID: 13727
// Function ID: 13728
// Dependencies: [13728]

// Module 13727
import _mod13728 from "module_13728" /* 13728 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod13728) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13728(arg0, arg1);
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
