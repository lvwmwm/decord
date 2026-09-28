// Module ID: 13558
// Function ID: 13559
// Dependencies: [13559]

// Module 13558
import _mod13559 from "module_13559" /* 13559 */;


export default (arg0, arg1) => {
  if (arg0 instanceof _mod13559) {
    return arg0;
  } else {
    try {
      const tmp8 = new _mod13559(arg0, arg1);
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
