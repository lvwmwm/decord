// Module ID: 14371
// Function ID: 14372
// Dependencies: [14372]

// Module 14371
import _mod14372 from "module_14372" /* 14372 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod14372) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod14372(arg0, arg1);
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
