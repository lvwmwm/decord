// Module ID: 14408
// Function ID: 14409
// Dependencies: [14401]

// Module 14408
import _mod14401 from "module_14401" /* 14401 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14401(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
