// Module ID: 16472
// Function ID: 16473
// Dependencies: [16471]

// Module 16472
import _mod16471 from "module_16471" /* 16471 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16471, arg0, obj);
  } catch (err) {
    _mod16471[arg0] = value;
  }
  return value;
};
