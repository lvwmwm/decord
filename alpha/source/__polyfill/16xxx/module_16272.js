// Module ID: 16272
// Function ID: 16273
// Dependencies: [16271]

// Module 16272
import _mod16271 from "module_16271" /* 16271 */;


export default (arg0, value) => {
  try {
    const obj = { value, configurable: true, writable: true };
    defineProperty(_mod16271, arg0, obj);
  } catch (err) {
    _mod16271[arg0] = value;
  }
  return value;
};
