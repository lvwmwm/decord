// Module ID: 16471
// Function ID: 16472
// Dependencies: [16470]

// Module 16471
import _mod16470 from "module_16470" /* 16470 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16470, arg0, obj);
  } catch (err) {
    _mod16470[arg0] = value;
  }
  return value;
};
