// Module ID: 14352
// Function ID: 14353
// Dependencies: [14345]

// Module 14352
import _mod14345 from "module_14345" /* 14345 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new _mod14345(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};
