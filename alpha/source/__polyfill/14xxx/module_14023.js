// Module ID: 14023
// Function ID: 14024
// Dependencies: [14018, 14024]

// Module 14023
import _mod14018 from "module_14018" /* 14018 */;

const _mod14024 = tmp(14024);

export default (arg0) => {
  if (_mod14018(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(_mod14024(arg0) + " is not a function");
    throw tmp6;
  }
};
