// Module ID: 14315
// Function ID: 14316
// Dependencies: [14316]

// Module 14315
import _mod14316 from "module_14316" /* 14316 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14316) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14316(arg0, arg1);
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
