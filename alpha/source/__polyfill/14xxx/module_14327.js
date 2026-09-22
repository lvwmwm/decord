// Module ID: 14327
// Function ID: 14328
// Dependencies: [14320]

// Module 14327
import _mod14320 from "module_14320" /* 14320 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14320(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
