// Module ID: 15740
// Function ID: 15741
// Dependencies: [15739]

// Module 15740
import _mod15739 from "module_15739" /* 15739 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod15739, arg0, obj);
  } catch (err) {
    _mod15739[arg0] = value;
  }
  return value;
};
