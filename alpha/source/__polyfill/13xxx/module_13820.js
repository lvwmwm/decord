// Module ID: 13820
// Function ID: 13821
// Dependencies: [13815, 13821]

// Module 13820
import _mod13815 from "module_13815" /* 13815 */;

const _mod13821 = tmp(13821);

export default (arg0) => {
  if (_mod13815(arg0)) {
    return arg0;
  } else {
    const tmp6 = new TypeError(_mod13821(arg0) + " is not a function");
    throw tmp6;
  }
};
