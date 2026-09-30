// Module ID: 14015
// Function ID: 14016
// Dependencies: [14010, 14016]

// Module 14015
import _mod14010 from "module_14010" /* 14010 */;

const _mod14016 = tmp(14016);

export default (arg0) => {
  if (_mod14010(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(_mod14016(arg0) + " is not a function");
    throw tmp6;
  }
};
