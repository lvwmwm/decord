// Module ID: 14417
// Function ID: 14418
// Dependencies: [14410]

// Module 14417
import _mod14410 from "module_14410" /* 14410 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14410(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
