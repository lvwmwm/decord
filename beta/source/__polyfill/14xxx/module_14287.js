// Module ID: 14287
// Function ID: 14288
// Dependencies: [14288]

// Module 14287
import _mod14288 from "module_14288" /* 14288 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14288) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14288(arg0, arg1);
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
